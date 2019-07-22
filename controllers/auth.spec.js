const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');

const user = {
    username: "Runty",
    email: "runty@cat.com",
    password: "pass",
    birthdate: "11/11/1111"
}

const user_err = {
    email: "mowm@cat.com",
    pass: "pass",
    birthdate: "11/11/1111"
}

const userLogin = {
    username: "Runty",
    password: "pass"
}

const userLoginErr = {
    username: "Runty",
    password: "password"
}

beforeEach(() => {
    return db('users').truncate();
});

describe('auth routes', () => {
    describe('registration', () => {
        it('should return a status 201', async () => {
            const res = await request(server).post('/register').send(user)
            expect(res.status).toBe(201)
        })

        it('should return an error when info is missing', async () => {
            const initial = await request(server).post('/register').send(user)
            const res = await request(server).post('/register').send(user_err)
            expect(res.status).toBe(500)
        })

        it('should return an error when duplicate entry is added', async () => {
            const initial = await request(server).post('/register').send(user)
            const res = await request(server).post('/register').send(user)
            expect(res.status).toBe(500)
        })
    })

    describe('login', () => {
        it('should give a 401 error when wrong login information is given', async () => {
            const register = await request(server).post('/register').send(user)
            const res = await request(server).post('/login').send(userLoginErr)
            expect(res.status).toBe(401)
        })
        it('should generate a token on login', async () => {
            const register = await request(server).post('/register').send(user)
            const res = await request(server).post('/login').send(user)
            expect(res.body.your_token).toBeTruthy();
        })
    })
})