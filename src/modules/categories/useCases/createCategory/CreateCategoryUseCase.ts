import { ICreateCategoryDTO } from "../../dtos/ICreateCategoriesDTO";
import { Category } from "../../entities/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

export class CreateCategoryUseCase {
  constructor(private categoryRepository: CategoriesRepository) {}

  async execute({ name, description }: ICreateCategoryDTO): Promise<Category> {

    const existsCategory = await this.categoryRepository.findByName(name);

    console.log(existsCategory);
    if( existsCategory ) throw new Error("Category already exists");

    return await this.categoryRepository.create( { name, description } );
  }
}
