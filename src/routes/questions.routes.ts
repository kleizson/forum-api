import { Router } from "express";
import questionsController from "../controllers/questions.controller";

import validator from "../middlewares/validator.middleware";
import {
  questionParams,
  questionsSchema,
} from "../validators/questions.validator";

const questionsRouter = Router();

questionsRouter.post(
  "/",
  validator("body", questionsSchema),
  questionsController.post
);

questionsRouter.get("/", questionsController.getAll);
questionsRouter.get(
  "/:questionUid",
  validator("params", questionParams),
  questionsController.get
);

export default questionsRouter;
