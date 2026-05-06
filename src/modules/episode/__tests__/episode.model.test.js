import { describe, it, expect } from 'vitest';
import { Episode } from '../../../models/Episode.js';

describe('Episode Model', () => {
  it('deve estar configurado com a tabela episodes', () => {
    expect(Episode.tableName).toBe('episodes');
  });

  it('deve possuir áudio e duração', () => {
    const attributes = Episode.getAttributes();

    expect(attributes).toHaveProperty('audio_url');
    expect(attributes).toHaveProperty('duration_seconds');
  });
});
