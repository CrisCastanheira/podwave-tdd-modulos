import { describe, it, expect } from 'vitest';
import { validateCategoryData, normalizeCategoryName, categoryHasPodcasts } from '../category.service.js';

describe('Category Service', () => {
  it('deve exigir nome válido para categoria', () => {
    const result = validateCategoryData({ name: 'IA' });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Nome da categoria deve ter pelo menos 3 caracteres.');
  });

  it('deve normalizar nome da categoria', () => {
    expect(normalizeCategoryName('  Tecnologia  ')).toBe('tecnologia');
  });

  it('deve identificar categoria com podcasts', () => {
    expect(categoryHasPodcasts([{ id: 1 }])).toBe(true);
    expect(categoryHasPodcasts([])).toBe(false);
  });
});
