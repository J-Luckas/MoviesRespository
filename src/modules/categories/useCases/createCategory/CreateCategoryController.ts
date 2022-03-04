import { Request, Response } from 'express';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {

  async handle( req: Request, res: Response ){
      const { name, description } = req.body;
      const categoryRepository = new CategoriesRepository();
      const createdCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

      return res
              .status(201)
              .json( await createdCategoryUseCase.execute( { name, description } ) );
  }
}
