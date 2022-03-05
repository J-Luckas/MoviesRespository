import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { defineError } from '../../../../utils/define_error';
import { UpdateCategoryUseCase } from './UpdateCategoryUseCase';

export class UpdateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, description } = req.body;

      const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);
      await updateCategoryUseCase.execute({ id, name, description });
      return res.status(204).send();
    } catch (err) {
      return defineError(err, res);
    }
  }
}
