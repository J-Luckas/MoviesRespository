import { Request, Response } from 'express';
import { defineError } from '../../../../utils/define_error';
import { CategoriesRepository } from '../../../categories/repositories/implementations/CategoriesRepository';
import { MoviesRepository } from '../../repositories/implementations/MoviesRepository';
import { CreateMovieUseCase } from './CreateMovieUseCase';

export class CreateMovieController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const {
        // eslint-disable-next-line camelcase
        name, description, duration, category_id,
      } = req.body;

      const moviesRepository = new MoviesRepository();
      const categoriesRepository = new CategoriesRepository();

      const createdMovieUseCase = new CreateMovieUseCase(moviesRepository, categoriesRepository);

      const movie = await createdMovieUseCase.execute({
        // eslint-disable-next-line camelcase
        name, description, duration, category_id,
      });

      return res
        .status(201)
        .json(movie);
    } catch (err) {
      return defineError(err, res);
    }
  }
}
