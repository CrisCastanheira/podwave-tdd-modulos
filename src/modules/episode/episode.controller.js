import { validateEpisodeData } from './episode.service.js';

export const listEpisodes = (req, res) => res.json({ message: 'Lista de episódios do PodWave.' });

export const createEpisode = (req, res) => {
  const validation = validateEpisodeData(req.body);

  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  return res.status(201).json({ message: 'Episódio válido para cadastro.' });
};
