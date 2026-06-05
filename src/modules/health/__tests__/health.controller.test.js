import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../../../app.js';

describe('Health Controller Integration', () => {

  it('GET /health deve retornar status 200', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
  });

  it('GET /health deve retornar objeto de saúde da aplicação', async () => {
    const response = await request(app).get('/health');

    expect(response.body).toHaveProperty('status');
  });

});