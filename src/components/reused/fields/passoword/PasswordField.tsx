import {
  FormControl,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
  TextFieldVariants,
} from "@mui/material";
import { FC } from "react";

type Props = {
  variant?: OutlinedInputProps;
} & Omit<OutlinedInputProps, "variant">;

export const CustomPasswordField: FC<Props> = (props) => {
  return (
    <FormControl variant="outlined" size={"small"}>
      <InputLabel
        sx={{
          top: "6px",
          "&.Mui-focused": {
            top: "0",
            color: "#11142D",
          },
        }}
        htmlFor="password"
      >
        Пароль
      </InputLabel>
      <OutlinedInput
        sx={{
          ".MuiButtonBase-root": {
            padding: "15px",
          },
        }}
        {...props}
      />
    </FormControl>
  );
};
