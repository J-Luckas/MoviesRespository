import { Request, Response } from 'express';
import { defineError } from '../../../../utils/define_error';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { DeleteCategoryUseCase } from './DeleteCategoryUseCase';

export class DeleteCategoryController {
  async handle(req: Request, res: Response): Promise<void | Response> {
    try {
      const { id } = req.params;
      const categoryRepository = new CategoriesRepository();
      const deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepository);
      await deleteCategoryUseCase.execute(id);
      return res.status(204).send();
    } catch (err) {
      return defineError(err, res);
    }
  }
}
