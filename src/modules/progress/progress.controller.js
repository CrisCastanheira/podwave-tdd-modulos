import { validateProgressData, isEpisodeCompleted } from './progress.service.js';

export const saveProgress = (req, res) => {
  const validation = validateProgressData({
    user_id: req.session?.user?.id,
    episode_id: req.params.episodeId,
    current_second: req.body.current_second,
    duration_seconds: req.body.duration_seconds
  });

  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  return res.json({
    message: 'Progresso válido para salvar.',
    completed: isEpisodeCompleted(req.body.current_second, req.body.duration_seconds)
  });
};
