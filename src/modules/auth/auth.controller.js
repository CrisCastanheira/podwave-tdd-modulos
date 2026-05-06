import { validateLoginInput, createSessionUser } from './auth.service.js';

export const showLogin = (req, res) => res.render('login', { title: 'Entrar - PodWave' });

export const login = (req, res) => {
  const validation = validateLoginInput(req.body);

  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  // Simulação para setup inicial. Na próxima etapa, validar no banco com bcrypt.
  req.session.user = createSessionUser({
    id: 1,
    name: 'Usuário Demo',
    email: req.body.email,
    role: 'user'
  });

  return res.redirect('/');
};

export const logout = (req, res) => {
  req.session.destroy?.(() => res.redirect('/'));
};
