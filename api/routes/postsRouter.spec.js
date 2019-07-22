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
        it('returns a 404 when there are no posts', async () => {
            await db('posts').truncate();
            request(server)
                .get('/posts')
                .set('authorization', token)
                .expect(404)
        })
    })
})