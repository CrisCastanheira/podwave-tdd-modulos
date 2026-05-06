import { validatePodcastData } from './podcast.service.js';

export const listPodcasts = (req, res) => res.json({ message: 'Lista de podcasts do PodWave.' });

export const createPodcast = (req, res) => {
  const validation = validatePodcastData(req.body);

  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  return res.status(201).json({ message: 'Podcast válido para cadastro.' });
};
