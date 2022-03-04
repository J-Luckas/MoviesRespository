import { Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
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
      if (err instanceof AppError) {
        return res
          .status(err.statusCode)
          .json({
            message: err.message,
          });
      }
      return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
      });
    }
  }
}
