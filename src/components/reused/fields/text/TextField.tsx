import TextField, {
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material/TextField/TextField";
import { FC } from "react";

type Props = {
  variant?: TextFieldVariants;
} & Omit<TextFieldProps, "variant">;

export const CustomTextField: FC<Props> = (props) => {
  return <TextField {...props} />;
};
