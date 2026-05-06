import { describe, it, expect } from 'vitest';
import { validateLoginInput, createSessionUser, canAccessAdmin } from '../auth.service.js';

describe('Auth Service', () => {
  it('deve exigir e-mail e senha no login', () => {
    const result = validateLoginInput({});

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('E-mail é obrigatório.');
    expect(result.errors).toContain('Senha é obrigatória.');
  });

  it('deve criar usuário de sessão sem expor senha', () => {
    const sessionUser = createSessionUser({ id: 1, name: 'Ana', email: 'ana@email.com', role: 'admin', password_hash: 'hash' });

    expect(sessionUser).toEqual({ id: 1, name: 'Ana', email: 'ana@email.com', role: 'admin' });
    expect(sessionUser.password_hash).toBeUndefined();
  });

  it('deve permitir acesso administrativo apenas para admin', () => {
    expect(canAccessAdmin({ role: 'admin' })).toBe(true);
    expect(canAccessAdmin({ role: 'user' })).toBe(false);
  });
});
