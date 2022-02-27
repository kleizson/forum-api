import Joi from "joi";

export const categoriesSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
});
