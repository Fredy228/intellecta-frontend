import Joi from "joi";

export const subjectSchema = Joi.object().keys({
  name: Joi.string().min(2).max(30).required().messages({
    "string.empty": "name|Назва порожня.",
    "any.required": "name|Назва порожня.",
    "string.min": "name|Назва не може бути менше 2 символів",
    "string.max": "name|Назва не може бути більше 30 символів",
  }),
  short_name: Joi.string().min(2).max(8).required().messages({
    "string.empty": "short_name|Коротка назва порожня.",
    "any.required": "short_name|Коротка назва порожня.",
    "string.min": "short_name|Коротка назва не може бути менше 2 символів",
    "string.max": "short_name|Коротка назва не може бути більше 8 символів",
  }),
  icon_name: Joi.string().min(2).max(30).messages({
    "string.min": "icon_name|Назва іконки не може бути менше 2 символів",
    "string.max": "icon_name|Назва іконки не може бути більше 30 символів",
  }),
});
