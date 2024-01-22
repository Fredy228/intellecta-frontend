import * as Joi from "joi";

export const userCreateSchema = Joi.object()
  .keys({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.email": "email|Електронна пошта вказана невірно",
        "string.empty": "email|Імейл порожній.",
      }),
    firstName: Joi.string().min(2).max(30).required().messages({
      "string.empty": "first name|Ім'я порожнє.",
      "any.required": "first name|Ім'я порожнє.",
      "string.min": "first name|Ім'я не може бути менше 2 символів",
      "string.max": "first name|Ім'я не може бути більше 30 символів",
    }),
    lastName: Joi.string().min(2).max(30).required().messages({
      "string.empty": "last-name|Призвіще порожнє.",
      "string.min": "last-name|Призвіще не може бути менше 2 символів",
      "string.max": "last-name|Призвіще не може бути більше 30 символів",
      "any.required": "last-name|Призвіще порожнє.",
    }),
    password: Joi.string()
      .regex(/(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,30}/)
      .required()
      .messages({
        "string.empty": "password|Пароль порожній.",
        "string.pattern.base":
          "password|Пароль повинен містити мінімум 8 символів, включаючи принаймні одну велику літеру та одну цифру",
      }),
  })
  .options({ stripUnknown: true });

export const userLoginSchema = Joi.object()
  .keys({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.email": "email|Електронна пошта вказана невірно",
        "string.empty": "email|Імейл порожній.",
      }),
    password: Joi.string().min(8).required().messages({
      "string.empty": "password|Пароль порожній.",
      "string.pattern.base":
        "password|Пароль повинен містити мінімум 8 символів, включаючи принаймні одну велику літеру та одну цифру",
    }),
  })
  .options({ stripUnknown: true });
