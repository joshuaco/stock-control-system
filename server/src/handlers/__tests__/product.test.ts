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

describe('GET /api/products', () => {
  it('should check if /api/products URL exists', async () => {
    const response = await request(server).get('/api/products');
    expect(response.status).not.toBe(404);
  });

  it('GET a JSON response with products', async () => {
    const response = await request(server).get('/api/products');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('data');
  });
});

describe('GET /api/products/:id', () => {
  it("should return status 404 when product doesn't exists", async () => {
    const ID = 2000;
    const response = await request(server).get(`/api/products/${ID}`);

    expect(response.status).toBe(404);
  });

  it('should check a valid product ID in the URL', async () => {
    const response = await request(server).get(`/api/products/invalid-id`);

    expect(response.status).toBe(400);
  });

  it('should get a JSON response when product is found', async () => {
    const response = await request(server).get('/api/products/1');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });
});

describe('PUT /api/products/:id', () => {
  it('should check a valid product ID in the URL', async () => {
    const response = await request(server)
      .put(`/api/products/invalid-id`)
      .send({
        name: 'TV - TESTING',
        price: 199.99
      });

    expect(response.status).toBe(400);
  });

  it("should return status 404 when product doesn't exists", async () => {
    const ID = 2000;
    const response = await request(server).put(`/api/products/${ID}`).send({
      name: 'TV - TESTING',
      price: 199.99
    });

    expect(response.status).toBe(404);
  });

  it('should display validation errors', async () => {
    const response = await request(server).put('/api/products/1').send({});

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty('errors');
  });

  it('should update a product with valid data', async () => {
    const response = await request(server).put('/api/products/1').send({
      name: 'TV UPDATED - TESTING',
      price: 299.99
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });
});

describe('PATCH /api/products/:id', () => {
  it('should check if is a valid product ID', async () => {
    const response = await request(server).patch('/api/products/not-valid-url');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors');
  });

  it("must returns status 404 if product ID doesn't exists", async () => {
    const response = await request(server).patch('/api/products/2000');
    expect(response.status).toBe(404);
  });

  it('should update product stock availability', async () => {
    const response = await request(server).patch('/api/products/1');
    expect(response.status).toBe(200);
    expect(response.body.data['inStock']).toBe(false);
  });
});

describe('DELETE /api/products/:id', () => {
  it('should check valid product ID', async () => {
    const response = await request(server).delete('/api/products/not-valid-id');

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors');
  });

  it("should return status 404 if product doesn't exists", async () => {
    const response = await request(server).delete('/api/products/2000');

    expect(response.status).toBe(404);
  });

  it('should delete a product', async () => {
    const response = await request(server).delete('/api/products/1');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Product deleted');
  });
});
