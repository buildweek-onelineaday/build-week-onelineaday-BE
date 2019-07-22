const request = require('supertest');
const login = require('../models/login');
const Users = require('../models/users');
const server = require('../api/server');

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

beforeEach(() => {
    return db('Users').truncate();
});

describe('auth routes', () => {
    describe('registration', () => {
        it('should return a status 201', async () => {
            const res = await request(server).post('/register').send(user)
            expect(res.status).toBe(201)
        })
    })
})