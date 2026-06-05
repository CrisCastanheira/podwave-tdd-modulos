import { describe, it, expect, vi } from 'vitest';

describe('User Mock Tests', () => {

  it('deve chamar função mockada com vi.fn()', () => {
    const mockCreateUser = vi.fn();

    mockCreateUser({
      name: 'Cristiano',
      email: 'cris@email.com'
    });

    expect(mockCreateUser).toHaveBeenCalled();
    expect(mockCreateUser).toHaveBeenCalledWith({
      name: 'Cristiano',
      email: 'cris@email.com'
    });
  });

  it('deve retornar valor configurado no mock', () => {
    const mockFindUser = vi.fn();

    mockFindUser.mockReturnValue({
      id: 1,
      name: 'Cristiano'
    });

    const user = mockFindUser();

    expect(user.id).toBe(1);
    expect(user.name).toBe('Cristiano');
  });

});
