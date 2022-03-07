import { Router } from "express";

import categoriesRouter from "./categories.routes";
import questionsRouter from "./questions.routes";
import answerRouter from "./answers.routes";

const routes = Router();

routes.use("/categories", categoriesRouter);
routes.use("/questions", questionsRouter);
routes.use("/answers", answerRouter);

export default routes;
