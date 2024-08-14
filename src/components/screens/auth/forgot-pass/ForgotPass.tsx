"use client";

import { FormEventHandler, useLayoutEffect, useRef, useState } from "react";
import { emailSchema } from "@/joi/email-schema";
import { getToastify } from "@/services/toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";
import { sendEmail } from "@/axios/mail";
import { outputError } from "@/services/output-error";

import styles from "../form/sing-in-form.module.scss";

import { CustomButtonDefault } from "@/components/reused/custom-btn/custom-btn-default/CustomButtonDefault";
import LoaderButton from "@/components/reused/loader/loader-button";
import { CustomTextField } from "@/components/reused/fields/text/TextField";
import { useNow } from "@/hooks/useNow";

export const ForgotPass = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [invalidInput, setInvalidInput] = useState<Array<string>>([]);
  const [sendAt, setSendAt] = useState<number | undefined>();
  const RESEND_TIMEOUT = 60000;

  const now = useNow(1000, sendAt, () => {
    if (sendAt && RESEND_TIMEOUT - (now - sendAt) < 0) {
      setSendAt(undefined);
    }
  });

  const secToResend = Math.floor(
    (sendAt ? RESEND_TIMEOUT - (now - sendAt) : 0) / 1000
  );

  const isDisabled = secToResend > 0;

  const submitForm: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setInvalidInput([]);

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
      await sendEmail({ email: email.trim() });
      getToastify("На пошту успішно надіслане посилання для зміну паролю");
      setSendAt(Date.now());
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
        <CustomButtonDefault type="submit" disabled={isLoading || isDisabled}>
          {isLoading ? (
            <LoaderButton color={"#fff"} width={"25"} height={"25"} />
          ) : !isDisabled ? (
            "Відправити"
          ) : (
            `Відправити повторно через: ${secToResend}`
          )}
        </CustomButtonDefault>
      </form>
    </div>
  );
};
