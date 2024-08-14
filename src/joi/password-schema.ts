import Joi from "joi";

export const passwordSchema = Joi.object().keys({
  password: Joi.string().min(8).required().messages({
    "string.empty": "password|Пароль порожній.",
    "string.pattern.base":
      "password|Пароль повинен містити мінімум 8 символів, включаючи принаймні одну велику літеру та одну цифру",
  }),
});
