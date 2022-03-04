import { ICreateCategoryDTO } from "../dtos/ICreateCategoriesDTO";
import { Category } from "../entities/Category";

export interface ICategoriesRepository {
  create(category: ICreateCategoryDTO): Promise<Category | undefined>;
  findByName(id: string): Promise<Category | undefined>;
}
