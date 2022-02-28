import { Router } from "express";
import questionsController from "../controllers/questions.controller";

import validator from "../middlewares/validator.middleware";
import { questionsSchema } from "../validators/questions.validator";

const categoriesRouter = Router();

categoriesRouter.post(
  "/",
  validator(questionsSchema),
  questionsController.post
);

categoriesRouter.get("/", questionsController.getAll);

export default categoriesRouter;
