import { ICreateMoviesDTO } from "../dtos/ICreateMoviesDTO";
import { Movie } from "../entities/Movie";

export interface IMoviesRepository {
    create(data: ICreateMoviesDTO): Promise<Movie>;
    findByName(name: string): Promise<Movie | undefined>;
}
