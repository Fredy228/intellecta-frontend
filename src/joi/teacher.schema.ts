import Joi from "joi";

export const teacherSchema = Joi.object().keys({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "email|Електронна пошта вказана невірно",
      "string.empty": "email|Імейл порожній.",
    }),
  job_title: Joi.string().min(2).max(30).required().messages({
    "string.empty": "job_title|Посада порожня.",
    "any.required": "job_title|Посада порожня.",
    "string.min": "job_title|Посада не може бути менше 2 символів",
    "string.max": "job_title|Посада не може бути більше 30 символів",
  }),
});
