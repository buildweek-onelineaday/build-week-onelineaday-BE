const request = require('supertest');

const server = require('./server');

describe('server', () => {

    describe('Environment', () => {
        it('should set the test environment', () => {
            const env = process.env.DB_ENV;

            expect(env).toBe('testing');
        });
    });

    describe('get /', () => {
        it('should return a 200 status', async () => {
            const res = await request(server).get('/');
    
            expect(res.status).toBe(200)
        })
    
        it('Should return the message "API is Up"', async () => {
            const res = await request(server).get('/');
    
            expect(res.body).toEqual({"message": 'API is Up'})
        })
    
        it('should return a JSON object fron the index route', async () => {
            const response = await request(server).get('/');
      
            expect(response.type).toEqual('application/json');
        });
    })
    
})