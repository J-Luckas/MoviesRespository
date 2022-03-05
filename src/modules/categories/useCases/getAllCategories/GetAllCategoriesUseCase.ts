import { injectable, inject } from 'tsyringe';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
export class GetAllCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
      private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute(): Promise<Category[]> {
    return await this.categoriesRepository.getAll();
  }
}
