import { describe, it, expect } from 'vitest';
import { buildDashboardSummary, canViewDashboard } from '../admin.service.js';

describe('Admin Service', () => {
  it('deve montar resumo do dashboard', () => {
    const summary = buildDashboardSummary({
      users: [{ id: 1 }, { id: 2 }],
      podcasts: [{ id: 1 }],
      episodes: [{ id: 1 }, { id: 2 }, { id: 3 }],
      reviews: [{ id: 1 }]
    });

    expect(summary).toEqual({
      totalUsers: 2,
      totalPodcasts: 1,
      totalEpisodes: 3,
      totalReviews: 1
    });
  });

  it('deve permitir dashboard apenas para admin', () => {
    expect(canViewDashboard({ role: 'admin' })).toBe(true);
    expect(canViewDashboard({ role: 'user' })).toBe(false);
  });
});
