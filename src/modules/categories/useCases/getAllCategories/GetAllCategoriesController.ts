import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetAllCategoriesUseCase } from './GetAllCategoriesUseCase';

export class GetAllCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getAllCategoriesUseCase = container.resolve(GetAllCategoriesUseCase);
    return res.json(await getAllCategoriesUseCase.execute());
  }
}
