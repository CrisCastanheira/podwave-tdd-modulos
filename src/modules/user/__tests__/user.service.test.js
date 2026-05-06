import { describe, it, expect } from 'vitest';
import { validateUserRegistration, sanitizeUser, canUpdateOwnProfile } from '../user.service.js';

describe('User Service', () => {
  it('deve validar dados obrigatórios de cadastro', () => {
    const result = validateUserRegistration({ name: 'Ca', email: 'email-invalido', password: '123' });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Nome deve ter pelo menos 3 caracteres.');
    expect(result.errors).toContain('E-mail inválido.');
    expect(result.errors).toContain('Senha deve ter pelo menos 6 caracteres.');
  });

  it('não deve expor password_hash ao sanitizar usuário', () => {
    const user = sanitizeUser({ id: 1, name: 'Ana', password_hash: 'hash' });

    expect(user.password_hash).toBeUndefined();
    expect(user.name).toBe('Ana');
  });

  it('deve permitir atualização pelo próprio usuário ou admin', () => {
    expect(canUpdateOwnProfile({ id: 1, role: 'user' }, 1)).toBe(true);
    expect(canUpdateOwnProfile({ id: 1, role: 'user' }, 2)).toBe(false);
    expect(canUpdateOwnProfile({ id: 3, role: 'admin' }, 2)).toBe(true);
  });
});
