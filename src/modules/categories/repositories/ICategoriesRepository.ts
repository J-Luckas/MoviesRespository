import { ICreateCategoryDTO } from '../dtos/ICreateCategoriesDTO';
import { Category } from '../entities/Category';

export interface ICategoriesRepository {
  create(category: ICreateCategoryDTO): Promise<Category | undefined>;
  findByName(id: string): Promise<Category | undefined>;
  getAll(): Promise<Category[]>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Category | undefined>;
  update(category: Category): Promise<void>;
}
