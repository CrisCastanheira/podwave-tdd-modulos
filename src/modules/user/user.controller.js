import { validateUserRegistration } from './user.service.js';

export const showRegister = (req, res) => res.render('register', { title: 'Cadastro - PodWave' });

export const register = (req, res) => {
  const validation = validateUserRegistration(req.body);

  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  return res.status(201).json({ message: 'Usuário válido para cadastro.' });
};
