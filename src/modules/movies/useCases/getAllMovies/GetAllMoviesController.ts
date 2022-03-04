import { Request, Response } from 'express';
import { MoviesRepository } from '../../repositories/implementations/MoviesRepository';
import { Movie } from '../../entities/Movie';
import { GetAllMoviesUseCase } from './GetAllMoviesUseCase';

export class GetAllMoviesController {
  async handle(req: Request, res: Response) {
    const movieRepository = new MoviesRepository();
    const getAllCategoriesUseCase = new GetAllMoviesUseCase(movieRepository);

    const movies: Movie[] = await getAllCategoriesUseCase.execute();

    res
      .status(200)
      .json(movies);
  }
}
