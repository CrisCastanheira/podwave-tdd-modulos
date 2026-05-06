export const validateLoginInput = ({ email, password } = {}) => {
  const errors = [];

  if (!email) errors.push('E-mail é obrigatório.');
  if (!password) errors.push('Senha é obrigatória.');

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const createSessionUser = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role
});

export const canAccessAdmin = (user) => user?.role === 'admin';
