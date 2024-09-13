import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

type Props = {
  variant?: ButtonProps;
} & Omit<ButtonProps, "variant">;

export const CustomButtonDefault: FC<Props> = (props) => {
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        transition: "all 0.3s",
        fontWeight: "600",
        textTransform: "none",
        borderRadius: "15px",
        background: "#438CED",
        "&:hover": {
          background: "#0C54B4",
        },
        "&:active": {
          background: "#043473",
        },
      }}
    ></Button>
  );
};
