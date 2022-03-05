import Joi from "joi";

export const questionsSchema = Joi.object({
  author: Joi.string().min(3).max(30).required(),
  title: Joi.string().max(220).required(),
  body: Joi.string().required(),
  categoryUid: Joi.string().required(),
});

export const questionParams = Joi.object({
  questionUid: Joi.string().required(),
});
