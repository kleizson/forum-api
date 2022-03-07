import { Response, Request } from "express";
import {
  CategoryBody,
  CategoryParams,
  RequestBody,
  RequestParams,
} from "../interfaces/request.interface";
import categoriesRepository from "../repositories/categories.repository";

export default {
  post(request: RequestBody<CategoryBody>, response: Response): Response {
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
      categories: categories.val() || [],
    });
  },
  async delete(
    request: RequestParams<CategoryParams>,
    response: Response
  ): Promise<Response> {
    try {
      categoriesRepository.remove(request.params.categoryUid);

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
};
