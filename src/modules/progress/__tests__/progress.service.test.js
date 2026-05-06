import { describe, it, expect } from 'vitest';
import { validateProgressData, isEpisodeCompleted } from '../progress.service.js';

describe('Progress Service', () => {
  it('deve impedir progresso maior que a duração', () => {
    const result = validateProgressData({ user_id: 1, episode_id: 2, current_second: 301, duration_seconds: 300 });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Progresso não pode ser maior que a duração do episódio.');
  });

  it('deve marcar episódio como concluído quando progresso chega ao final', () => {
    expect(isEpisodeCompleted(300, 300)).toBe(true);
    expect(isEpisodeCompleted(100, 300)).toBe(false);
  });
});
