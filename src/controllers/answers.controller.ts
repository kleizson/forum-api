import { Response } from "express";
import {
  AnswerBody,
  AnswerParams,
  RequestBody,
  RequestParams,
} from "src/interfaces/request.interface";
import answersRepository from "../repositories/answers.repository";

export default {
  post(request: RequestBody<AnswerBody>, response: Response): Response {
    try {
      answersRepository.create(request.body);

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
  async getAllByQuestion(
    request: RequestParams<AnswerParams>,
    response: Response
  ): Promise<Response> {
    const answers = await answersRepository.getAllByQuestion(
      request.params.questionUid
    );

    return response.status(200).json({
      answers: answers.val() || [],
    });
  },
};
