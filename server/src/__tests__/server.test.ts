import request from 'supertest';
import server from '../server';

describe('Test server', () => {
  it('should receive a JSON response from /api', async () => {
    const response = await request(server).get('/api');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body.message).toBe('API is running');
  });
});

jest.mock('../config/db');

describe('connectDB', () => {
  it('should handle database connection error', async () => {
    // TODO: Mock the db.authenticate() method to throw an error
  });
});
