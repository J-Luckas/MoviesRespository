import { Router } from 'express';
import { CreateMovieController } from '../modules/movies/useCases/createMovie/CreateMovieController';

export const moviesRoutes = Router();

const createMovieController = new CreateMovieController();

moviesRoutes.post('/', createMovieController.handle);
