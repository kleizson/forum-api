import { NextFunction, Request, Response } from "express";
import Joi from "joi";

type requestType = "body" | "params" | "query";

export default function (
  requestTypeParam: requestType,
  validator: Joi.ObjectSchema
) {
  return function (request: Request, response: Response, next: NextFunction) {
    const { error } = validator.validate(request[requestTypeParam], {
      abortEarly: false,
    });
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((error) => error.message).join(", ");

      response.status(422).json({ error: message });
    }
  };
}
