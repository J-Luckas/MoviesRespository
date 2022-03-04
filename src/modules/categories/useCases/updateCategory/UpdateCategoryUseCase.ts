import { AppError } from '../../../../errors/AppError';
import { IUpdateCategoryDTO } from '../../dtos/IUpdateCategoryDTO';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

export class UpdateCategoryUseCase {
  private categoriesRepository: CategoriesRepository;

  constructor(categoryRepository: CategoriesRepository) {
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
