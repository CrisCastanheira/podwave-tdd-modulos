import { describe, it, expect } from 'vitest';
import { Podcast } from '../../../models/Podcast.js';

describe('Podcast Model', () => {
  it('deve estar configurado com a tabela podcasts', () => {
    expect(Podcast.tableName).toBe('podcasts');
  });

  it('deve possuir título e categoria', () => {
    const attributes = Podcast.getAttributes();

    expect(attributes).toHaveProperty('title');
    expect(attributes).toHaveProperty('category');
  });
});
