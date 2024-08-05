"use client";

import { useState } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { IconButton, InputAdornment } from "@mui/material";

import styles from "../form/sing-in-form.module.scss";

import { CustomButtonDefault } from "@/components/reused/custom-btn/custom-btn-default/CustomButtonDefault";
import { CustomPasswordField } from "@/components/reused/fields/passoword/PasswordField";
import LoaderButton from "@/components/reused/loader/loader-button";
import { CustomTextField } from "@/components/reused/fields/text/TextField";

type Props = {
  params: { key: string };
};

export const RestorePass = ({ params }: Props) => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [reNewPassword, setReNewPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowPass, setIsShowPass] = useState<boolean>(false);
  const [invalidInput, setInvalidInput] = useState<Array<string>>([]);

  const isMatchesPass = newPassword === reNewPassword;

  const submitForm = () => {};

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className={styles.authForm}>
      <h1 className={styles.authForm_title}>Відновити пароль?</h1>
      <form className={styles.authForm_form} onSubmit={submitForm}>
        <label className={styles.authForm_label}>
          <CustomPasswordField
            id="new-password"
            label="Новий пароль"
            type={isShowPass ? "text" : "password"}
            placeholder={"Введіть пароль"}
            error={invalidInput.includes("password")}
            value={newPassword}
            onChange={(e) => setNewPassword(e.currentTarget.value)}
            autoComplete="current-password"
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
          />
        </label>
        <label className={styles.authForm_label}>
          <CustomTextField
            id="re_password"
            label={"Підтвердити пароль"}
            type={isShowPass ? "text" : "password"}
            placeholder={"Повторіть пароль"}
            error={invalidInput.includes("password")}
            value={reNewPassword}
            onChange={(e) => setReNewPassword(e.currentTarget.value)}
          />
        </label>
        <CustomButtonDefault
          type="submit"
          disabled={isLoading || !isMatchesPass}
        >
          {isLoading ? (
            <LoaderButton color={"#fff"} width={"25"} height={"25"} />
          ) : (
            "Змінити"
          )}
        </CustomButtonDefault>
      </form>
    </div>
  );
};
