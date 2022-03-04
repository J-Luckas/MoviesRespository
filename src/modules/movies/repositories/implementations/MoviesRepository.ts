import { getRepository, Repository } from 'typeorm';
import { Movie } from '../../entities/Movie';
import { IMoviesRepository } from '../IMoviesRepository';
import { ICreateMoviesDTO } from '../../dtos/ICreateMoviesDTO';

export class MoviesRepository implements IMoviesRepository {
  // Language: typescript
  private repository: Repository<Movie>;

  constructor() {
    this.repository = getRepository(Movie);
  }

  async create({
    // eslint-disable-next-line camelcase
    name, description, duration, category_id,
  }: ICreateMoviesDTO): Promise<Movie> {
    const movie = this.repository.create({
      // eslint-disable-next-line camelcase
      name, description, duration, category_id,
    });
    await this.repository.save(movie);
    return movie;
  }

  async findByName(name: string): Promise<Movie | undefined> {
    return this.repository.findOne({ where: { name } });
  }

  async getAll(): Promise<Movie[]> {
    return this.repository.find({
      relations: ['category'],
    });
  }
}
