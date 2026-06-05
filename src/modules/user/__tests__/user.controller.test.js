import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../../../app.js';

describe('User Controller Integration', () => {

  it('GET /register deve retornar página de cadastro', async () => {
    const response = await request(app).get('/register');

    expect(response.status).toBe(200);
  });

  it('POST /register deve cadastrar usuário válido', async () => {
    const response = await request(app)
      .post('/register')
      .send({
        name: 'Cristiano Silva',
        email: 'cristiano@email.com',
        password: '123456'
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message');
  });

  it('POST /register deve retornar erro para nome inválido', async () => {
    const response = await request(app)
      .post('/register')
      .send({
        name: 'Ca',
        email: 'cristiano@email.com',
        password: '123456'
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('errors');
  });

});
