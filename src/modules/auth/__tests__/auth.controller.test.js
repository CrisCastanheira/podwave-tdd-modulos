import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../../../app.js';

describe('Auth Controller', () => {

  it('deve carregar a página de login', async () => {
    const response = await request(app).get('/login');

    expect(response.status).toBe(200);
  });

  it('deve realizar login com dados válidos', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'teste@email.com',
        password: '123456'
      });

    expect(response.status).toBe(302);
    expect(response.headers.location).toBe('/');
  });

  it('deve retornar erro quando email não for informado', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        password: '123456'
      });

    expect(response.status).toBe(400);
    expect(response.body.errors).toContain('E-mail é obrigatório.');
  });

  it('deve retornar erro quando senha não for informada', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'teste@email.com'
      });

    expect(response.status).toBe(400);
    expect(response.body.errors).toContain('Senha é obrigatória.');
  });

});

it('deve realizar logout', async () => {
  const response = await request(app)
    .post('/logout');

  expect(response.status).toBe(302);
  expect(response.headers.location).toBe('/');
});
