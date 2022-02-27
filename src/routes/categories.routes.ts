import { Router } from "express";
import categoriesController from "../controllers/categories.controller";

import validator from "../middlewares/validator.middleware";
import { categoriesSchema } from "../validators/categories.validator";

const categoriesRouter = Router();

categoriesRouter.post(
  "/",
  validator(categoriesSchema),
  categoriesController.post
);

categoriesRouter.get("/", categoriesController.getAll);

export default categoriesRouter;
