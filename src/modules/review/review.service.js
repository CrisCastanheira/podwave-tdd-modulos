export const validateReviewData = ({ user_id, episode_id, rating, comment } = {}) => {
  const errors = [];

  if (!user_id) errors.push('Avaliação deve estar vinculada a um usuário.');
  if (!episode_id) errors.push('Avaliação deve estar vinculada a um episódio.');
  if (!rating || Number(rating) < 1 || Number(rating) > 5) errors.push('Nota deve ser entre 1 e 5.');
  if (comment && comment.trim().length < 3) errors.push('Comentário deve ter pelo menos 3 caracteres.');

  return { isValid: errors.length === 0, errors };
};

export const calculateAverageRating = (reviews = []) => {
  if (reviews.length === 0) return 0;
  const total = reviews.reduce((sum, review) => sum + Number(review.rating), 0);
  return Number((total / reviews.length).toFixed(1));
};

export const alreadyReviewed = (reviews = [], userId) => {
  return reviews.some((review) => Number(review.user_id) === Number(userId));
};
