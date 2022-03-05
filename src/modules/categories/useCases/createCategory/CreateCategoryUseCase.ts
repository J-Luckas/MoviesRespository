import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { ICreateCategoryDTO } from '../../dtos/ICreateCategoriesDTO';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
export class CreateCategoryUseCase {
  private categoryRepository: ICategoriesRepository;

  constructor(
    @inject('CategoriesRepository')
      categoryRepository: ICategoriesRepository,
  ) {
    this.categoryRepository = categoryRepository;
  }

  async execute({ name, description }: ICreateCategoryDTO): Promise<Category | AppError> {
    const existsCategory = await this.categoryRepository.findByName(name);

    if (existsCategory) throw new AppError('Category already exists', 401);

    return this.categoryRepository.create({ name, description });
  }
}
