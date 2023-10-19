"use client";

import { FC, useEffect, useState } from "react";
import type { FormEventHandler } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";

import styles from "./sing-in-form.module.scss";
import { getToastify } from "@/services/toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";
import LoaderButton from "@/components/reused/loader/loader-button";
import * as API from "@/axios/auth";
import { setUser } from "@/redux/auth/slice";

type Props = {};
const SingInForm: FC<Props> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const session = useSession();

  const linkTo = () => {
    router.push("/dashboard");
  };

  const submitForm: FormEventHandler<HTMLFormElement> = async (
    e,
  ): Promise<void> => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const data = await API.loginUser({
        email,
        password,
      });

      console.log("data", data);

      if (data?.user) {
        dispatch(setUser(data.user));
      }

      const answer = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/dashboard",
      });

      linkTo();
    } catch (error) {
      console.log(error);
      getToastify("Невірний логін або пароль", ToastifyEnum.ERROR);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (session?.data) {
      linkTo();
    }
  }, [session]);

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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={3}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
export default SingInForm;
