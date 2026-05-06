import { validateCategoryData } from './category.service.js';

export const listCategories = (req, res) => res.json({ message: 'Lista de categorias do PodWave.' });

export const createCategory = (req, res) => {
  const validation = validateCategoryData(req.body);

  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  return res.status(201).json({ message: 'Categoria válida para cadastro.' });
};
