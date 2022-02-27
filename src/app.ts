import express, { Request, Response } from "express";
import routes from "./routes/routes";
import cors from "cors";

import {
  isUserLogged,
  verifyAccessToken,
} from "./middlewares/authentication.middleware";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(verifyAccessToken);
app.use(isUserLogged);
app.use(routes);

app.get("*", (_req: Request, res: Response) => {
  return res.status(404).json({
    message: "Not Found",
  });
});

export default app;
