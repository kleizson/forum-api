import { Router } from "express";

import categoriesRouter from "./categories.routes";
import questionsRouter from "./questions.routes";

const routes = Router();

routes.use("/categories", categoriesRouter);
routes.use("/questions", questionsRouter);

export default routes;
