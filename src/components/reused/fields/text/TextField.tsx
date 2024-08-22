import TextField, {
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material/TextField/TextField";
import { FC } from "react";

type Props = {
  variant?: TextFieldVariants;
} & Omit<TextFieldProps, "variant">;

export const CustomTextField: FC<Props> = (props) => {
  return (
    <TextField
      sx={{
        ".MuiTextField-root": {
          transition: "all 0.3s",
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
          },
          "& .MuiInputBase-root": {
            borderRadius: "20px",
          },
          "&:hover": {
            background: "#F1F3FE",
            color: "#9E9E9E",
            ".MuiInputBase-input": {
              color: "#9E9E9E",
            },
          },
        },
        ".MuiOutlinedInput-root": {
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
        },
        ".MuiInputLabel-root": {
          left: "15px",
          color: "#11142D",
          "&.Mui-focused": {
            left: "0px",
            color: "#11142D",
          },
          "&.MuiFormLabel-filled": {
            left: "0px",
          },
          "&.Mui-error": {
            color: "red",
          },
        },
      }}
      {...props}
    />
  );
};
