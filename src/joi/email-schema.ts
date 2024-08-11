import Joi from "joi";

export const emailSchema = Joi.object().keys({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "email|Електронна пошта вказана невірно",
      "string.empty": "email|Імейл порожній.",
    }),
});
