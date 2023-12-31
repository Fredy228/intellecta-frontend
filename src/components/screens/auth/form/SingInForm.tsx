"use client";

import { type FC, type FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";

import styles from "./sing-in-form.module.scss";

import { getToastify } from "@/services/toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";
import LoaderButton from "@/components/reused/loader/loader-button";

const SingInForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitForm: FormEventHandler<HTMLFormElement> = async (
    e,
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);

    const answer = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/dashboard",
    });
    console.log(answer);

    if (answer?.error) {
      getToastify("Невірний логін або пароль", ToastifyEnum.ERROR);
      setIsLoading(false);
    }
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
            required={true}
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
            required={true}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </label>
        <button
          className={styles.authForm_button}
          type={"submit"}
          disabled={isLoading}
        >
          {isLoading && (
            <LoaderButton color={"#fff"} width={"40"} height={"40"} />
          )}
          {!isLoading && "Увійти"}
        </button>
      </form>
    </div>
  );
};
export default SingInForm;
