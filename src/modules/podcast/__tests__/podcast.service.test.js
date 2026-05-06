import { describe, it, expect } from 'vitest';
import { validatePodcastData, canManagePodcast, normalizePodcastTitle } from '../podcast.service.js';

describe('Podcast Service', () => {
  it('deve exigir título, descrição e categoria', () => {
    const result = validatePodcastData({ title: 'IA', description: 'curta' });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Título do podcast deve ter pelo menos 3 caracteres.');
    expect(result.errors).toContain('Descrição do podcast deve ter pelo menos 10 caracteres.');
    expect(result.errors).toContain('Categoria é obrigatória.');
  });

  it('deve permitir gerenciamento apenas para admin', () => {
    expect(canManagePodcast({ role: 'admin' })).toBe(true);
    expect(canManagePodcast({ role: 'user' })).toBe(false);
  });

  it('deve normalizar título removendo espaços extras', () => {
    expect(normalizePodcastTitle('  Tech Cast  ')).toBe('Tech Cast');
  });
});
