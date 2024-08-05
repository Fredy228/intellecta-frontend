import {
  FormControl,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";

export const CustomPasswordField = (
  props: Omit<OutlinedInputProps, "variant">
) => {
  return (
    <FormControl variant="outlined" size={"small"}>
      <InputLabel
        sx={{
          top: "10px",
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
