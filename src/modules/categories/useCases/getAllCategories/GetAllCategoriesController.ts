import { Request, Response } from 'express';
import { Category } from '../../entities/Category';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { GetAllCategoriesUseCase } from './GetAllCategoriesUseCase';

export class GetAllCategoriesController {
  async handle(req: Request, res: Response) {
    const categoriesRepository = new CategoriesRepository();
    const getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoriesRepository);
    const categories: Category[] = await getAllCategoriesUseCase.execute();

    res.status(200).json(categories);
  }
}
