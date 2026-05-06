import { vi } from 'vitest';

global.mockReq = (body = {}, session = {}, params = {}, query = {}) => ({
  body,
  session,
  params,
  query,
  flash: vi.fn(),
  get: vi.fn()
});

global.mockRes = () => {
  const res = {};
  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  res.redirect = vi.fn().mockReturnValue(res);
  res.render = vi.fn().mockReturnValue(res);
  return res;
};
