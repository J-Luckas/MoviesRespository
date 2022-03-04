import { getRepository, Repository } from "typeorm";
import { ICreateCategoryDTO } from "../../dtos/ICreateCategoriesDTO";
import { Category } from "../../entities/Category";


export class CategoriesRepository {

  // Language: typescript
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({ name, description });
    await this.repository.save(category)
    return category;
  }

  async findByName( name: string ): Promise<Category | undefined>{
    return await this.repository.findOne( { name } );
  }
}
