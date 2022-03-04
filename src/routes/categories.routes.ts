import { Router } from "express";
import { CreateCategoryController } from "../modules/categories/useCases/createCategory/CreateCategoryController";

export const categoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);
