import Joi from "joi";

export const categoriesSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
});

export const categoriesParams = Joi.object({
  categoryUid: Joi.string().required(),
});
