import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

export class GetAllCategoriesUseCase {
  private readonly categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  public async execute() {
    return this.categoriesRepository.getAll();
  }
}
