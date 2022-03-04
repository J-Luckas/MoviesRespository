import { Request, Response } from 'express';
import { defineError } from '../../../../utils/define_error';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { UpdateCategoryUseCase } from './UpdateCategoryUseCase';

export class UpdateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const categoryRepository = new CategoriesRepository();
      const updateCategoryUseCase = new UpdateCategoryUseCase(categoryRepository);
      await updateCategoryUseCase.execute({ id, name, description });
      return res.status(204).send();
    } catch (err) {
      return defineError(err, res);
    }
  }
}
