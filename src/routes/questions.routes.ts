import { Router } from "express";
import questionsController from "../controllers/questions.controller";

import validator from "../middlewares/validator.middleware";
import {
  questionParams,
  questionsSchema,
} from "../validators/questions.validator";

const categoriesRouter = Router();

categoriesRouter.post(
  "/",
  validator("body", questionsSchema),
  questionsController.post
);

categoriesRouter.get("/", questionsController.getAll);
categoriesRouter.get(
  "/:questionUid",
  validator("params", questionParams),
  questionsController.get
);

export default categoriesRouter;
