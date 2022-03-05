import { container } from 'tsyringe';

// Importing repos and their interfaces to register one container
import { ICategoriesRepository } from '../../modules/categories/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/categories/repositories/implementations/CategoriesRepository';

import { IMoviesRepository } from '../../modules/movies/repositories/IMoviesRepository';
import { MoviesRepository } from '../../modules/movies/repositories/implementations/MoviesRepository';

container.registerSingleton<IMoviesRepository>('MoviesRepository', MoviesRepository);
container.registerSingleton<ICategoriesRepository>('CategoriesRepository', CategoriesRepository);
