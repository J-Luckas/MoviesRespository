import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
export class DeleteCategoryUseCase {
  private categoriesRepository: ICategoriesRepository;

  constructor(
    @inject('CategoriesRepository')
      categoriesRepository: ICategoriesRepository,
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute(id: string): Promise<void> {
    if (!await this.categoriesRepository.findById(id)) throw new AppError('Category doesn\'t exists', 401);

    await this.categoriesRepository.delete(id);
  }
}
