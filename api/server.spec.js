const request = require('supertest');

const server = require('./server');

describe('API GET', () => {
  it('should return a 200 status', async () => {
    const res = await request(server).get('/');

    expect(res.status).toBe(200);
  });

  it('Should return the message "API is Up"', async () => {
    const res = await request(server).get('/');

    expect(res.body).toEqual({ message: 'API is Up' });
  });
});
