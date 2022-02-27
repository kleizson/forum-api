import { auth } from "../../config/firebase.config";
import { NextFunction, Request, Response } from "express";

export const verifyAccessToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers["x-access-token"] as string;

  if (!token) {
    response.status(422).json({ error: "Missing Authentication Token" });
  } else {
    next();
  }
};

export const isUserLogged = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers["x-access-token"] as string;

  try {
    await auth.verifyIdToken(token);
    next();
  } catch (error) {
    if (error instanceof Error) {
      response.status(422).json({ error: error.message });
    }
  }
};

export const isAuthorized = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers["x-access-token"] as string;

  const authorizedRolesUsers = ["admin", "mod"];
  const { role } = await auth.verifyIdToken(token);

  if (authorizedRolesUsers.includes(role)) {
    next();
  } else {
    response.status(403).json({ error: "Access Denied" });
  }
};
