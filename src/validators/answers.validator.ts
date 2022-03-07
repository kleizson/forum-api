import Joi from "joi";

export const answerSchema = Joi.object({
  author: Joi.string().min(3).max(30).required(),
  body: Joi.string().required(),
  questionUid: Joi.string().required(),
});

export const answerParams = Joi.object({
  questionUid: Joi.string().required(),
});
