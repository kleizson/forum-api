import { Response, Request } from "express";
import {
  QuestionParams,
  QuestionsBody,
  RequestBody,
  RequestParams,
} from "src/interfaces/request.interface";
import questionsRepository from "../repositories/questions.repository";

export default {
  post(request: RequestBody<QuestionsBody>, response: Response): Response {
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
  async get(
    request: RequestParams<QuestionParams>,
    response: Response
  ): Promise<Response> {
    const question = await questionsRepository.get(request.params.questionUid);

    return response.status(200).json({
      question,
    });
  },
};
