import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { defineError } from '../../../../utils/define_error';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, description } = req.body;
      const createdCategoryUseCase = container.resolve(CreateCategoryUseCase);
      const category = await createdCategoryUseCase.execute({ name, description });
      return res
        .status(201)
        .json(category);
    } catch (err) {
      return defineError(err, res);
    }
  }
}
