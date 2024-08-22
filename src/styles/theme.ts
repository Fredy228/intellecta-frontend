"use client";

import { red } from "@mui/material/colors";
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
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
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
