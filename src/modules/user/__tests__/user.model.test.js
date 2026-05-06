import { describe, it, expect } from 'vitest';
import { User } from '../../../models/User.js';

describe('User Model', () => {
  it('deve estar configurado com a tabela users', () => {
    expect(User.tableName).toBe('users');
  });

  it('deve possuir os campos principais do usuário', () => {
    const attributes = User.getAttributes();

    expect(attributes).toHaveProperty('name');
    expect(attributes).toHaveProperty('email');
    expect(attributes).toHaveProperty('password_hash');
    expect(attributes).toHaveProperty('role');
  });
});
