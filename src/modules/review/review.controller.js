import { validateReviewData } from './review.service.js';

export const createReview = (req, res) => {
  const validation = validateReviewData({
    user_id: req.session?.user?.id,
    episode_id: req.params.episodeId,
    rating: req.body.rating,
    comment: req.body.comment
  });

  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  return res.status(201).json({ message: 'Avaliação válida para cadastro.' });
};
