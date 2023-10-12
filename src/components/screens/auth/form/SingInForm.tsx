"use client";

import { FC, useState } from "react";
import type { FormEventHandler } from "react";

import styles from "./sing-in-form.module.scss";

type Props = {};
const SingInForm: FC<Props> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.authForm}>
      <h1 className={styles.authForm_title}>Авторизація</h1>
      <form className={styles.authForm_form} onSubmit={submitForm}>
        <label className={styles.authForm_label}>
          Логін:
          <input
            className={styles.authForm_input}
            type={"email"}
            placeholder={"введіть email"}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </label>
        <label className={styles.authForm_label}>
          Пароль:
          <input
            className={styles.authForm_input}
            type={"password"}
            placeholder={"введіть пароль"}
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </label>
        <button className={styles.authForm_button} type={"submit"}>
          Увійти
        </button>
      </form>
    </div>
  );
};
export default SingInForm;
