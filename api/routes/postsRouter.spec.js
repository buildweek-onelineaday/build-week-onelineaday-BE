const request = require('supertest')
const db = require('../../data/dbConfig');
const server = require('../server');

let token = null;

beforeEach(function(done){
    request(server)
        .post('/register')
        .send({
            username: "thisisauser",
            pass: "pass",
            email: "email@email1234.com",
            birthdate: "11/11/1111"
        })
        .then(
            request(server)
                .post('/login')
                .send({
                    username: "thisisauser",
                    pass: "pass"
                })
                .end(function(err, res) {
                    token = res.body.token
                    done()
                })
        )
})

describe('Router for Posts', () => {
    describe('GET /posts', () => {
        it('returns a status 401 before authorized', async () => {
            const res = await request(server).get('/posts')
            expect(res.status).toBe(401)
        })
        it('returns a 200 when authorized', () => {
            request(server)
                .get('/posts')
                .set('authorization', token)
                .expect(200)
        })
        it('should return 7 posts', () => {
            request(server)
                .get('/posts')
                .set('authorization', token)
                .expect('Content-Length', 7)
        })
        it('returns a 404 when there are no posts and user is authorized', async () => {
            await db('posts').truncate();
            request(server)
                .get('/posts')
                .set('authorization', token)
                .expect(404)
        })
    })

    describe('GET posts/:id', () => {
        it('gives an error when there is no post by that ID', () => {
            request(server)
                .get('/posts/10')
                .set('authorization', token)
                .expect({ message: "No post with that ID" })
        })
        
        it('returns the right post based on id', () => {
            request(server)
                .get('/posts/2')
                .set('authorization', token)
                .expect({
                    "id": 2,
                    "post": "lorem",
                    "created_at": "2019-07-22 03:56:16",
                    "updated_at": "2019-07-22 03:56:16",
                    "user_id": 1
                })
        })
    })

    describe('POST /posts', () => {
        it('gives an error if the new post is empty', () => {
            request(server)
                .post('/posts')
                .set('authorization', token)
                .send()
                .expect({ message: "Please include request body" })
        })
    })
})