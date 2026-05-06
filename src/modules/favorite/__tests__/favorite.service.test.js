import { describe, it, expect } from 'vitest';
import { validateFavoriteData, alreadyFavorited } from '../favorite.service.js';

describe('Favorite Service', () => {
  it('deve exigir usuário e episódio para favoritar', () => {
    const result = validateFavoriteData({});

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Favorito deve estar vinculado a um usuário.');
    expect(result.errors).toContain('Favorito deve estar vinculado a um episódio.');
  });

  it('deve impedir favorito duplicado pelo mesmo usuário', () => {
    const favorites = [{ episode_id: 10 }, { episode_id: 20 }];

    expect(alreadyFavorited(favorites, 10)).toBe(true);
    expect(alreadyFavorited(favorites, 30)).toBe(false);
  });
});
