import { getHealth } from './health.service.js';

export const healthController = (req, res) => {
  return res.status(200).json(getHealth());
};
