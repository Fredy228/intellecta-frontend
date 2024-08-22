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
          left: "15px",
          color: "#11142D",
          "&.Mui-focused": {
            top: "0",
            left: "0px",
            color: "#11142D",
          },
          "&.MuiFormLabel-filled": {
            left: "0px",
          },
          "&.Mui-error": {
            color: "red",
          },
        }}
        htmlFor="password"
      >
        Пароль
      </InputLabel>
      <OutlinedInput
        sx={{
          borderRadius: "20px",
          "&:hover": {
            background: "#F1F3FE",
            input: {
              color: "#9E9E9E",
            },
          },
          "& input": {
            transition: "all 0.3s",
            padding: "15px 27px",
            color: "#11142D",
          },
          "& fieldset": {
            border: "2px solid #E8E8E8",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #E8E8E8",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #E8E8E8",
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            border: "2px solid red",
          },
          ".MuiButtonBase-root": {
            padding: "15px",
          },
        }}
        {...props}
      />
    </FormControl>
  );
};
