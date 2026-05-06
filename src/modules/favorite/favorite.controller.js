import { validateFavoriteData } from './favorite.service.js';

export const addFavorite = (req, res) => {
  const validation = validateFavoriteData({
    user_id: req.session?.user?.id,
    episode_id: req.params.episodeId
  });

  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  return res.status(201).json({ message: 'Episódio válido para favoritar.' });
};
