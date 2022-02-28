import { Response, Request } from "express";
import questionsRepository from "../repositories/questions.repository";

export default {
  post(request: Request, response: Response): Response {
    try {
      questionsRepository.create(request.body);

      return response.status(201).send();
    } catch (error) {
      if (error instanceof Error) {
        return response.status(500).send({
          error: error.message,
        });
      }

      return response.status(500).send({
        error: "Unknown create questions error",
      });
    }
  },
  async getAll(_request: Request, response: Response): Promise<Response> {
    const questions = await questionsRepository.getAll();

    return response.status(200).json({
      questions,
    });
  },
};
