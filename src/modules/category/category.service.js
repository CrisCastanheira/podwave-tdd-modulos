export const validateCategoryData = ({ name } = {}) => {
  const errors = [];

  if (!name || name.trim().length < 3) errors.push('Nome da categoria deve ter pelo menos 3 caracteres.');

  return { isValid: errors.length === 0, errors };
};

export const normalizeCategoryName = (name = '') => name.trim().toLowerCase();

export const categoryHasPodcasts = (podcasts = []) => podcasts.length > 0;
