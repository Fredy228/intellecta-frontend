import TextField, {
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material/TextField/TextField";

export const CustomTextField = (
  props: {
    variant?: TextFieldVariants;
  } & Omit<TextFieldProps, "variant">
) => {
  return <TextField {...props} />;
};
