"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#438ced",
      // light: "#808191",
    },
    // secondary: {
    //   main: "#438ced",
    // },
    // warning: {
    //   main: "#ff754c",
    // },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          "&:hover": {
            background: "#F1F3FE",
            ".MuiInputBase-input": {
              color: "#9E9E9E",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #E8E8E8",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #E8E8E8",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #E8E8E8",
          },
          "& .MuiInputBase-input": {
            transition: "all 0.3s",
            padding: "15px 27px",
            color: "#11142D",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          transition: "all 0.3s",
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
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          left: "15px",
          color: "#11142D",
          "&.Mui-focused": {
            left: "-5px",
            color: "#11142D",
          },
        },
      },
    },
  },
});

// const theme = {
//   main: "#11142d",
//   light: "#808191",
//   second: "#438ced",
//   accent: "#ff754c",
// };

export default theme;
