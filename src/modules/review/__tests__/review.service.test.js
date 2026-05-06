import { describe, it, expect } from 'vitest';
import { validateReviewData, calculateAverageRating, alreadyReviewed } from '../review.service.js';

describe('Review Service', () => {
  it('deve aceitar apenas nota entre 1 e 5', () => {
    const result = validateReviewData({ user_id: 1, episode_id: 2, rating: 6 });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Nota deve ser entre 1 e 5.');
  });

  it('deve calcular média das avaliações', () => {
    const average = calculateAverageRating([{ rating: 5 }, { rating: 4 }, { rating: 3 }]);

    expect(average).toBe(4);
  });

  it('deve identificar avaliação duplicada pelo usuário', () => {
    const reviews = [{ user_id: 1 }, { user_id: 2 }];

    expect(alreadyReviewed(reviews, 1)).toBe(true);
    expect(alreadyReviewed(reviews, 3)).toBe(false);
  });
});
