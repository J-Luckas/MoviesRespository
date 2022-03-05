import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { defineError } from '../../../../utils/define_error';
import { DeleteCategoryUseCase } from './DeleteCategoryUseCase';

export class DeleteCategoryController {
  async handle(req: Request, res: Response): Promise<void | Response> {
    try {
      const { id } = req.params;
      const deleteCategoryUseCase = container.resolve(DeleteCategoryUseCase);
      await deleteCategoryUseCase.execute(id);
      return res.status(204).send();
    } catch (err) {
      return defineError(err, res);
    }
  }
}
