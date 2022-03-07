import { Router } from "express";

import answersController from "../controllers/answers.controller";

import validator from "../middlewares/validator.middleware";
import { answerParams, answerSchema } from "../validators/answers.validator";

const answerRouter = Router();

answerRouter.post("/", validator("body", answerSchema), answersController.post);

answerRouter.get(
  "/:questionUid",
  validator("params", answerParams),
  answersController.getAllByQuestion
);

export default answerRouter;
