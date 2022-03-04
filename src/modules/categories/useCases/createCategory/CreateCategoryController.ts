import { Request, Response } from 'express';
import { defineError } from '../../../../utils/define_error';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, description } = req.body;
      const categoryRepository = new CategoriesRepository();
      const createdCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
      const category = await createdCategoryUseCase.execute({ name, description });
      return res
        .status(201)
        .json(category);
    } catch (err) {
      return defineError(err, res);
    }
  }
}
