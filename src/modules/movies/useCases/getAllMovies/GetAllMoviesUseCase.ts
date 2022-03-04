import { IMoviesRepository } from '../../repositories/IMoviesRepository';

export class GetAllMoviesUseCase {
  private moviesRepository: IMoviesRepository;

  constructor(moviesRepository: IMoviesRepository) {
    this.moviesRepository = moviesRepository;
  }

  async execute(): Promise<any> {
    return this.moviesRepository.getAll();
  }
}
