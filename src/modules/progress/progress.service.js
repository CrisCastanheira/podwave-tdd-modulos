export const validateProgressData = ({ user_id, episode_id, current_second = 0, duration_seconds = 0 } = {}) => {
  const errors = [];

  if (!user_id) errors.push('Progresso deve estar vinculado a um usuário.');
  if (!episode_id) errors.push('Progresso deve estar vinculado a um episódio.');
  if (Number(current_second) < 0) errors.push('Progresso não pode ser negativo.');
  if (Number(duration_seconds) > 0 && Number(current_second) > Number(duration_seconds)) {
    errors.push('Progresso não pode ser maior que a duração do episódio.');
  }

  return { isValid: errors.length === 0, errors };
};

export const isEpisodeCompleted = (currentSecond, durationSeconds) => {
  if (!durationSeconds || durationSeconds <= 0) return false;
  return Number(currentSecond) >= Number(durationSeconds);
};
