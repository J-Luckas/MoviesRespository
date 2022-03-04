import { AppError } from '../../../../errors/AppError';
import { IUpdateCategoryDTO } from '../../dtos/IUpdateCategoryDTO';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

export class UpdateCategoryUseCase {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoryRepository: ICategoriesRepository) {
    this.categoriesRepository = categoryRepository;
  }

  async execute({ id, name, description }: IUpdateCategoryDTO): Promise<void> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) throw new AppError('Category doesn\'t exists', 401);

    category.name = name;
    category.description = description;

    await this.categoriesRepository.update(category);
  }
}
