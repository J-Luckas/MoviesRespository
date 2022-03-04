import { AppError } from '../../../../errors/AppError';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

export class DeleteCategoryUseCase {
  private categoriesRepository: CategoriesRepository;

  constructor(
    categoriesRepository: CategoriesRepository,
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute(id: string): Promise<void> {
    if (!await this.categoriesRepository.findById(id)) throw new AppError('Category doesn\'t exists', 401);

    await this.categoriesRepository.delete(id);
  }
}
