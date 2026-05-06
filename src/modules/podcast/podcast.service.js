export const validatePodcastData = ({ title, description, category } = {}) => {
  const errors = [];

  if (!title || title.trim().length < 3) errors.push('Título do podcast deve ter pelo menos 3 caracteres.');
  if (!description || description.trim().length < 10) errors.push('Descrição do podcast deve ter pelo menos 10 caracteres.');
  if (!category) errors.push('Categoria é obrigatória.');

  return { isValid: errors.length === 0, errors };
};

export const canManagePodcast = (user) => user?.role === 'admin';

export const normalizePodcastTitle = (title = '') => title.trim();
