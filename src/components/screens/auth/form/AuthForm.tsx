"use client";

import { type FC, type FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import { usePathname, useSearchParams } from "next/navigation";

import styles from "./sing-in-form.module.scss";

import { getToastify } from "@/services/toastify";
import { userCreateSchema, userLoginSchema } from "@/joi/auth-schema";
import { ToastifyEnum } from "@/enums/toastify-enum";
import LoaderButton from "@/components/reused/loader/loader-button";
import Link from "next/link";
import { IconGoogle } from "@/components/reused/Icon/Icon";

type Props = {
  isRegister: boolean;
};
const AuthForm: FC<Props> = ({ isRegister }) => {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowPass, setIsShowPass] = useState<boolean>(false);
  const [invalidInput, setInvalidInput] = useState<Array<string>>([]);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const isMatchesPass = (isRegister && password === rePassword) || !isRegister;

  const submitForm: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setInvalidInput([]);

    const schema = isRegister ? userCreateSchema : userLoginSchema;

    const { error } = schema.validate({
      email: email.trim(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      password,
    });

    console.log("err", error?.details);

    if (error) {
      const nameField = error.message.split("|")[0];
      setInvalidInput((prevState) => [...prevState, nameField]);

      setIsLoading(false);
      return getToastify(error.message.split("|")[1], ToastifyEnum.ERROR, 5000);
    }
    const answer = await signIn("credentials", {
      email: email.trim(),
      password,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      type: pathname.split("/")[2],
      redirect: false,
    });
    console.log("answer", answer);

    if (answer?.error) {
      if (answer.status === 401) {
        if (!isRegister)
          getToastify("Invalid login or password", ToastifyEnum.ERROR);
        if (isRegister)
          getToastify("Such a user already exists", ToastifyEnum.ERROR);
      } else {
        console.error("Unknown error");
      }
    }

    setIsLoading(false);
  };

  const signInWithGoogle = async () => {
    setIsLoading(true);
    const answer = await signIn("google", {
      callbackUrl,
    });

    if (answer?.error) {
      if (answer.status === 401) {
        console.error("Error 401");
      } else {
        console.error("Unknown error");
      }
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.authForm}>
      <h1 className={styles.authForm_title}>
        {isRegister ? "Реєстрація" : "Вхід"}
      </h1>
      <form className={styles.authForm_form} onSubmit={submitForm}>
        <label className={styles.authForm_label}>
          {isRegister ? "Електронна пошта:" : "Логін:"}
          <input
            className={`${styles.authForm_input} ${
              invalidInput.includes("email") && styles.invalid
            }`}
            type={"email"}
            placeholder={"Введіть email"}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </label>
        {isRegister && (
          <>
            <label className={styles.authForm_label}>
              Ім'я:
              <input
                className={`${styles.authForm_input} ${
                  invalidInput.includes("first name") && styles.invalid
                }`}
                type={"text"}
                placeholder={"Введіть ім'я"}
                value={firstName}
                onChange={(e) => setFirstName(e.currentTarget.value)}
              />
            </label>
            <label className={styles.authForm_label}>
              Призвіще:
              <input
                className={`${styles.authForm_input} ${
                  invalidInput.includes("last-name") && styles.invalid
                }`}
                type={"text"}
                placeholder={"Введіть призвіще"}
                value={lastName}
                onChange={(e) => setLastName(e.currentTarget.value)}
              />
            </label>
          </>
        )}
        <label className={styles.authForm_label}>
          Пароль:
          <input
            className={`${styles.authForm_input} ${
              invalidInput.includes("password") && styles.invalid
            }`}
            type={isShowPass ? "text" : "password"}
            placeholder={"Введіть пароль"}
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value.trim())}
            autoComplete={!isRegister ? "current-password" : undefined}
          />
        </label>
        {isRegister && (
          <label className={styles.authForm_label}>
            <input
              className={`${styles.authForm_input} ${
                invalidInput.includes("password") && styles.invalid
              }`}
              type={isShowPass ? "text" : "password"}
              placeholder={"Повторіть пароль"}
              value={rePassword}
              onChange={(e) => setRePassword(e.currentTarget.value.trim())}
            />
          </label>
        )}

        <Link
          className={styles.authForm_linkRedirect}
          href={isRegister ? "/auth/login" : "/auth/register"}
        >
          {isRegister
            ? "Ти вже маєш аккаунт? Увійти"
            : "Ти ще не маєш аккаунту? Створити"}
        </Link>

        <button
          className={styles.authForm_button}
          type={"submit"}
          disabled={isLoading || !isMatchesPass}
        >
          {isLoading ? (
            <LoaderButton color={"#fff"} width={"40"} height={"40"} />
          ) : (
            <>{isRegister ? "Заєреструватися" : "Увійти"}</>
          )}
        </button>
        <div className={styles.authForm_separatorWrap}>
          <span className={styles.authForm_separator}>Чи</span>
        </div>
        <button
          className={`${styles.authForm_button} ${styles.google}`}
          type={"button"}
          disabled={isLoading}
          onClick={signInWithGoogle}
        >
          {isLoading ? (
            <LoaderButton color={"#8B8BEF"} width={"40"} height={"40"} />
          ) : (
            <>
              <IconGoogle /> &nbsp; Увійти із Google
            </>
          )}
        </button>
      </form>
    </div>
  );
};
export default AuthForm;
