"use client";

import { Dispatch, type FC, type FormEventHandler, useState } from "react";
import Link from "next/link";
import { set } from "local-storage";
import { isAxiosError } from "axios";
import { useDispatch } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import styles from "./sing-in-form.module.scss";

import { getToastify } from "@/services/toastify";
import { userCreateSchema, userLoginSchema } from "@/joi/auth-schema";
import { ToastifyEnum } from "@/enums/toastify-enum";
import LoaderButton from "@/components/reused/loader/loader-button";
import { IconGoogle } from "@/components/reused/Icon/Icon";
import { loginUser, registerUser } from "@/axios/auth";
import { setUser } from "@/redux/user/slice";
import { setAuthorize } from "@/redux/slice-param";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

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

  const isMatchesPass = (isRegister && password === rePassword) || !isRegister;
  const dispacth: Dispatch<any> = useDispatch();

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

    if (error) {
      const nameField = error.message.split("|")[0];
      setInvalidInput((prevState) => [...prevState, nameField]);

      setIsLoading(false);
      return getToastify(error.message.split("|")[1], ToastifyEnum.ERROR, 5000);
    }

    try {
      let authUser;
      if (isRegister) {
        authUser = await registerUser({
          email: email.trim(),
          password,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
        });
      } else {
        authUser = await loginUser({ email: email.trim(), password });
      }

      if (authUser.accessToken) {
        set<string>("token", authUser.accessToken);
        dispacth(setUser(authUser));
        dispacth(setAuthorize(true));
      }
    } catch (e) {
      if (isAxiosError(e) && e.response?.data?.message) {
        getToastify(e.response.data.message, ToastifyEnum.ERROR, 3000);
      } else {
        getToastify("Unknown error", ToastifyEnum.ERROR, 3000);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    window.open(`${process.env.SERVER_URL}/api/auth/google`, "_self");
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <div className={styles.authForm}>
      <h1 className={styles.authForm_title}>
        {isRegister ? "Реєстрація" : "Вхід"}
      </h1>
      <form className={styles.authForm_form} onSubmit={submitForm}>
        <label className={styles.authForm_label}>
          <TextField
            id="email"
            label={"Електронна пошта"}
            variant="outlined"
            placeholder={"Введіть email"}
            size="small"
            error={invalidInput.includes("email")}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </label>
        {isRegister && (
          <>
            <label className={styles.authForm_label}>
              <TextField
                id="first_name"
                label={"Ім'я"}
                variant="outlined"
                placeholder={"Введіть ім'я"}
                size="small"
                error={invalidInput.includes("first-name")}
                value={firstName}
                onChange={(e) => setFirstName(e.currentTarget.value)}
              />
            </label>
            <label className={styles.authForm_label}>
              <TextField
                id="last_name"
                label={"Призвіще"}
                variant="outlined"
                placeholder={"Введіть призвіще"}
                size="small"
                error={invalidInput.includes("last-name")}
                value={lastName}
                onChange={(e) => setLastName(e.currentTarget.value)}
              />
            </label>
          </>
        )}
        <label className={styles.authForm_label}>
          <FormControl variant="outlined" size={"small"}>
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <OutlinedInput
              id="password"
              type={isShowPass ? "text" : "password"}
              placeholder={"Введіть пароль"}
              error={invalidInput.includes("password")}
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              autoComplete={!isRegister ? "current-password" : undefined}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setIsShowPass((prevState) => !prevState)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {isShowPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </label>
        {isRegister && (
          <label className={styles.authForm_label}>
            <TextField
              id="re_password"
              label={"Підтвердження паролю"}
              type={isShowPass ? "text" : "password"}
              variant="outlined"
              placeholder={"Повторіть пароль"}
              size="small"
              error={invalidInput.includes("password")}
              value={rePassword}
              onChange={(e) => setRePassword(e.currentTarget.value)}
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

        <Button
          type={"submit"}
          variant="contained"
          disabled={isLoading || !isMatchesPass}
        >
          {isLoading ? (
            <LoaderButton color={"#fff"} width={"25"} height={"25"} />
          ) : (
            <>{isRegister ? "Заєреструватися" : "Увійти"}</>
          )}
        </Button>
        {/*<div className={styles.authForm_separatorWrap}>*/}
        {/*  <span className={styles.authForm_separator}>Чи</span>*/}
        {/*</div>*/}
        {/*<button*/}
        {/*  className={`${styles.authForm_button} ${styles.google}`}*/}
        {/*  type={"button"}*/}
        {/*  disabled={isLoading}*/}
        {/*  onClick={signInWithGoogle}*/}
        {/*>*/}
        {/*  {isLoading ? (*/}
        {/*    <LoaderButton color={"#8B8BEF"} width={"40"} height={"40"} />*/}
        {/*  ) : (*/}
        {/*    <>*/}
        {/*      <IconGoogle /> &nbsp; Увійти із Google*/}
        {/*    </>*/}
        {/*  )}*/}
        {/*</button>*/}
      </form>
    </div>
  );
};
export default AuthForm;
