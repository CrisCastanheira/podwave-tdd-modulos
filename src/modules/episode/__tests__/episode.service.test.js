import { describe, it, expect } from 'vitest';
import { validateEpisodeData, canPlayNextEpisode } from '../episode.service.js';

describe('Episode Service', () => {
  it('deve exigir podcast, título e áudio', () => {
    const result = validateEpisodeData({ title: 'EP' });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Episódio deve estar vinculado a um podcast.');
    expect(result.errors).toContain('Título do episódio deve ter pelo menos 3 caracteres.');
    expect(result.errors).toContain('Arquivo de áudio é obrigatório.');
  });

  it('não deve aceitar duração negativa', () => {
    const result = validateEpisodeData({ podcast_id: 1, title: 'Episódio 1', audio_url: '/audio.mp3', duration_seconds: -1 });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Duração não pode ser negativa.');
  });

  it('deve indicar se existe próximo episódio', () => {
    expect(canPlayNextEpisode(0, 3)).toBe(true);
    expect(canPlayNextEpisode(2, 3)).toBe(false);
  });
});
