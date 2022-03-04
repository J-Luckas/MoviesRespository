import { Router } from 'express';
import { CreateMovieController } from '../modules/movies/useCases/createMovie/CreateMovieController';
import { GetAllMoviesController } from '../modules/movies/useCases/getAllMovies/GetAllMoviesController';

export const moviesRoutes = Router();

const createMovieController = new CreateMovieController();
const getAllMoviesController = new GetAllMoviesController();

moviesRoutes.post('/', createMovieController.handle);
moviesRoutes.get('/', getAllMoviesController.handle);
