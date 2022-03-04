import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

export class GetAllCategoriesUseCase {
  private readonly categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  public async execute() {
    return this.categoriesRepository.getAll();
  }
}
