"use client";

import { useState } from "react";

import styles from "../form/sing-in-form.module.scss";

import { CustomButtonDefault } from "@/components/reused/custom-btn/custom-btn-default/CustomButtonDefault";
import LoaderButton from "@/components/reused/loader/loader-button";
import { CustomTextField } from "@/components/reused/fields/text/TextField";

export const ForgotPass = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [invalidInput, setInvalidInput] = useState<Array<string>>([]);

  const submitForm = () => {};

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
      </form>
    </div>
  );
};
