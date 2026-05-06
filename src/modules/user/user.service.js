export const validateUserRegistration = ({ name, email, password } = {}) => {
  const errors = [];

  if (!name || name.trim().length < 3) errors.push('Nome deve ter pelo menos 3 caracteres.');
  if (!email) errors.push('E-mail é obrigatório.');
  if (email && !email.includes('@')) errors.push('E-mail inválido.');
  if (!password || password.length < 6) errors.push('Senha deve ter pelo menos 6 caracteres.');

  return { isValid: errors.length === 0, errors };
};

export const sanitizeUser = (user) => {
  if (!user) return null;
  const { password_hash, ...safeUser } = user;
  return safeUser;
};

export const canUpdateOwnProfile = (loggedUser, targetUserId) => {
  if (!loggedUser) return false;
  return loggedUser.role === 'admin' || Number(loggedUser.id) === Number(targetUserId);
};
