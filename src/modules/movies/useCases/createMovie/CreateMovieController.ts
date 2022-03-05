import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { defineError } from '../../../../utils/define_error';
import { CreateMovieUseCase } from './CreateMovieUseCase';

export class CreateMovieController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const {
        // eslint-disable-next-line camelcase
        name, description, duration, category_id,
      } = req.body;

      const createdMovieUseCase = container.resolve(CreateMovieUseCase);

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
