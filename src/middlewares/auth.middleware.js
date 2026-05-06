export const requireAuth = (req, res, next) => {
  if (!req.session?.user) {
    req.flash?.('error', 'Faça login para acessar esta página.');
    return res.redirect('/login');
  }
  return next();
};

export const requireAdmin = (req, res, next) => {
  if (!req.session?.user) {
    req.flash?.('error', 'Faça login para acessar esta página.');
    return res.redirect('/login');
  }

  if (req.session.user.role !== 'admin') {
    return res.status(403).render('error', { title: 'Acesso negado' });
  }

  return next();
};
