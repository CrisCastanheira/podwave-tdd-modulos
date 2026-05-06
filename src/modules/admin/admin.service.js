export const buildDashboardSummary = ({ users = [], podcasts = [], episodes = [], reviews = [] } = {}) => ({
  totalUsers: users.length,
  totalPodcasts: podcasts.length,
  totalEpisodes: episodes.length,
  totalReviews: reviews.length
});

export const canViewDashboard = (user) => user?.role === 'admin';
