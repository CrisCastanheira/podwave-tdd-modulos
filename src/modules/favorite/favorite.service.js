export const validateFavoriteData = ({ user_id, episode_id } = {}) => {
  const errors = [];

  if (!user_id) errors.push('Favorito deve estar vinculado a um usuário.');
  if (!episode_id) errors.push('Favorito deve estar vinculado a um episódio.');

  return { isValid: errors.length === 0, errors };
};

export const alreadyFavorited = (favorites = [], episodeId) => {
  return favorites.some((favorite) => Number(favorite.episode_id) === Number(episodeId));
};
