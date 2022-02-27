import { Response, Request } from "express";
import categoriesRepository from "../repositories/categories.repository";

export default {
  post(request: Request, response: Response): Response {
    try {
      categoriesRepository.create(request.body);

      return response.status(201).send();
    } catch (error) {
      if (error instanceof Error) {
        return response.status(500).send({
          error: error.message,
        });
      }

      return response.status(500).send({
        error: "Unknown create categories error",
      });
    }
  },
  async getAll(_request: Request, response: Response): Promise<Response> {
    const categories = await categoriesRepository.getAll();

    return response.status(200).json({
      categories,
    });
  },
};
