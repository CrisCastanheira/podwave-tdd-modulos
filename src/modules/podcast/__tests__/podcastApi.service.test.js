import { describe, it, expect, beforeEach } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { fetchPodcastSuggestions } from '../podcastApi.service.js';

const mock = new MockAdapter(axios);

beforeEach(() => {
  mock.reset();
});

describe('Podcast API Service', () => {

  it('deve retornar lista de podcasts', async () => {
    mock.onGet('https://api.podwave.com/suggestions')
      .reply(200, [
        { id: 1, title: 'TechCast' }
      ]);

    const result = await fetchPodcastSuggestions();

    expect(result).toHaveLength(1);
  });

  it('deve retornar podcast correto', async () => {
    mock.onGet('https://api.podwave.com/suggestions')
      .reply(200, [
        { id: 1, title: 'TechCast' }
      ]);

    const result = await fetchPodcastSuggestions();

    expect(result[0].title).toBe('TechCast');
  });

  it('deve retornar array vazio', async () => {
    mock.onGet('https://api.podwave.com/suggestions')
      .reply(200, []);

    const result = await fetchPodcastSuggestions();

    expect(result).toEqual([]);
  });

  it('deve lançar erro quando API retornar 500', async () => {
    mock.onGet('https://api.podwave.com/suggestions')
      .reply(500);

    await expect(
      fetchPodcastSuggestions()
    ).rejects.toThrow();
  });

  it('deve lançar erro quando API estiver indisponível', async () => {
    mock.onGet('https://api.podwave.com/suggestions')
      .networkError();

    await expect(
      fetchPodcastSuggestions()
    ).rejects.toThrow();
  });

});