import Joi from "joi";

export const groupSchema = Joi.object().keys({
  name: Joi.string().min(2).max(30).required().messages({
    "string.empty": "name|Назва порожня.",
    "any.required": "name|Назва порожня.",
    "string.min": "name|Назва не може бути менше 2 символів",
    "string.max": "name|Назва не може бути більше 30 символів",
  }),
  level: Joi.number().min(1).max(15).required().messages({
    "number.base": "level|Поле повинно бути числом.",
    "number.min": "level|Число повинно бути не менше за 1.",
    "number.max": "level|Число повинно бути не більше за 15.",
    "any.required": "level|Номер курсу порожній.",
  }),
});
