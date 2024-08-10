"use client";

import { FormEventHandler, useEffect, useState } from "react";
import Joi from "joi";
import { getToastify } from "@/services/toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";
import { sendEmail } from "@/axios/mail";
import { outputError } from "@/services/output-error";

import styles from "../form/sing-in-form.module.scss";

import { CustomButtonDefault } from "@/components/reused/custom-btn/custom-btn-default/CustomButtonDefault";
import LoaderButton from "@/components/reused/loader/loader-button";
import { CustomTextField } from "@/components/reused/fields/text/TextField";

export const ForgotPass = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [invalidInput, setInvalidInput] = useState<Array<string>>([]);
  const [isActiveRepeatBtn, setIsActiveRepeatBtn] = useState(false);

  const emailSchema = Joi.object().keys({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.email": "email|Електронна пошта вказана невірно",
        "string.empty": "email|Імейл порожній.",
      }),
  });

  const submitForm: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setInvalidInput([]);
    setIsActiveRepeatBtn(false);

    const { error } = emailSchema.validate({
      email: email.trim(),
    });

    if (error) {
      const nameField = error.message.split("|")[0];
      setInvalidInput((prevState) => [...prevState, nameField]);

      setIsLoading(false);
      return getToastify(error.message.split("|")[1], ToastifyEnum.ERROR, 5000);
    }

    try {
      const { data } = await sendEmail({ email: email.trim() });
      setTimeout(() => {
        setIsActiveRepeatBtn(true);
      }, 60000);
    } catch (error) {
      outputError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.authForm}>
      <h1 className={styles.authForm_title}>Забули пароль?</h1>
      <form className={styles.authForm_form} onSubmit={submitForm}>
        <label className={styles.authForm_label}>
          <CustomTextField
            id="email"
            label="Електронна пошта"
            placeholder={"Введіть email"}
            error={invalidInput.includes("email")}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </label>
        <CustomButtonDefault type="submit" disabled={isLoading}>
          {isLoading ? (
            <LoaderButton color={"#fff"} width={"25"} height={"25"} />
          ) : (
            "Відправити"
          )}
        </CustomButtonDefault>
        <div className={styles.authForm_repeatBtn}>
          <CustomButtonDefault
            type="submit"
            disabled={isLoading || !isActiveRepeatBtn}
          >
            {isLoading ? (
              <LoaderButton color={"#fff"} width={"25"} height={"25"} />
            ) : (
              "Відправити повторно"
            )}
          </CustomButtonDefault>
        </div>
      </form>
    </div>
  );
};
