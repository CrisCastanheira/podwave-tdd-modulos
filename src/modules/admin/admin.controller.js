import { buildDashboardSummary } from './admin.service.js';

export const showDashboard = (req, res) => {
  const summary = buildDashboardSummary();

  return res.json({
    message: 'Dashboard administrativo do PodWave.',
    summary
  });
};
