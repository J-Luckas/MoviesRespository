import { Router } from 'express';
import { CreateCategoryController } from '../modules/categories/useCases/createCategory/CreateCategoryController';
import { DeleteCategoryController } from '../modules/categories/useCases/deleteCategory/DeleteCategoryController';
import { GetAllCategoriesController } from '../modules/categories/useCases/getAllCategories/GetAllCategoriesController';

export const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const getAllCategoriesController = new GetAllCategoriesController();
const deleteCategoryController = new DeleteCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', getAllCategoriesController.handle);
categoriesRoutes.delete('/:id', deleteCategoryController.handle);
