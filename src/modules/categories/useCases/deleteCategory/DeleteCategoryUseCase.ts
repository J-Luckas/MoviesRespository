import { AppError } from '../../../../errors/AppError';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

export class DeleteCategoryUseCase {
  private categoriesRepository: ICategoriesRepository;

  constructor(
    categoriesRepository: ICategoriesRepository,
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute(id: string): Promise<void> {
    if (!await this.categoriesRepository.findById(id)) throw new AppError('Category doesn\'t exists', 401);

    await this.categoriesRepository.delete(id);
  }
}
