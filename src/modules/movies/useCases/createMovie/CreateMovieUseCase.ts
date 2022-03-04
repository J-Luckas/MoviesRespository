import { AppError } from '../../../../errors/AppError';
import { ICategoriesRepository } from '../../../categories/repositories/ICategoriesRepository';
import { ICreateMoviesDTO } from '../../dtos/ICreateMoviesDTO';
import { Movie } from '../../entities/Movie';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';

export class CreateMovieUseCase {
  private movieRepository: IMoviesRepository;

  private categoryRepository: ICategoriesRepository;

  constructor(movieRepository: IMoviesRepository, categoryRepository: ICategoriesRepository) {
    this.movieRepository = movieRepository;
    this.categoryRepository = categoryRepository;
  }

  async execute({
    // eslint-disable-next-line camelcase
    name, description, duration, category_id,
  }: ICreateMoviesDTO): Promise<Movie> {
    const existsCategory = await this.categoryRepository.findById(category_id);
    const existsMovie = await this.movieRepository.findByName(name);

    if (existsMovie) throw new AppError('Movie already exists', 401);
    if (!existsCategory) throw new AppError('Category not found', 401);

    return this.movieRepository.create({
      // eslint-disable-next-line camelcase
      name, description, duration, category_id,
    });
  }
}
