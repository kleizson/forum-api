import { Router } from "express";
import categoriesController from "../controllers/categories.controller";

import validator from "../middlewares/validator.middleware";
import { categoriesSchema } from "../validators/categories.validator";
import { isAuthorized } from "../middlewares/authentication.middleware";

const categoriesRouter = Router();

categoriesRouter.post(
  "/",
  isAuthorized,
  validator("body", categoriesSchema),
  categoriesController.post
);

categoriesRouter.get("/", categoriesController.getAll);

export default categoriesRouter;
