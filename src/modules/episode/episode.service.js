export const validateEpisodeData = ({ podcast_id, title, audio_url, duration_seconds = 0 } = {}) => {
  const errors = [];

  if (!podcast_id) errors.push('Episódio deve estar vinculado a um podcast.');
  if (!title || title.trim().length < 3) errors.push('Título do episódio deve ter pelo menos 3 caracteres.');
  if (!audio_url) errors.push('Arquivo de áudio é obrigatório.');
  if (Number(duration_seconds) < 0) errors.push('Duração não pode ser negativa.');

  return { isValid: errors.length === 0, errors };
};

export const canPlayNextEpisode = (currentIndex, totalEpisodes) => currentIndex + 1 < totalEpisodes;
