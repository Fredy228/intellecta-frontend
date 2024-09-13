import { TextField, TextFieldProps, TextFieldVariants } from "@mui/material";
import React, { FC } from "react";

type Props = {
  variant?: TextFieldVariants;
} & Omit<TextFieldProps, "variant">;

export const AddingInput: FC<Props> = (props) => {
  return (
    <TextField
      sx={{
        ".MuiTextField-root": {
          transition: "all 0.3s",
          "& .MuiOutlinedInput-root": {
            borderRadius: "15px",
          },
          "& .MuiInputBase-root": {
            borderRadius: "15px",
          },
          "&:hover": {
            color: "#9E9E9E",
            ".MuiInputBase-input": {
              color: "#9E9E9E",
            },
          },
        },
        ".MuiOutlinedInput-root": {
          borderRadius: "20px",
          "&:hover": {
            input: {
              color: "#9E9E9E",
            },
          },
          "& input": {
            transition: "all 0.3s",
            padding: "10px 15px",
            fontSize: "12px",
            color: "#808191",
            backgroundColor: "#fff",
            borderRadius: "20px",
          },
          "& fieldset": {
            border: "2px solid #E2DFDF",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #E2DFDF",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #E2DFDF",
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            border: "2px solid red",
          },
        },
        ".MuiInputLabel-root": {
          top: "-5px",
          left: "0px",
          fontSize: "12px",
          color: "#808191",
          "&.Mui-focused": {
            top: "2px",
            left: "0px",
            color: "#808191",
          },
          "&.MuiFormLabel-filled": {
            top: "2px",
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
