import { Router } from 'express';
import { categoriesRoutes } from './categories.routes';
import { moviesRoutes } from './movies.routes';

export const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/movies', moviesRoutes);
