import request from 'supertest';
import server from '../../server';

describe('POST /api/products', () => {
  it('should display validation errors', async () => {
    const response = await request(server).post('/api/products').send({});

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty('errors');
  });

  it('should create a new product', async () => {
    const response = await request(server).post('/api/products').send({
      name: 'TV - TESTING',
      price: 199.99
    });

    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty('data');
    expect(response.status).not.toEqual(400);
  });
});
