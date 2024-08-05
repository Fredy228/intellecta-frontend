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
          top: "6px",
          "&.Mui-focused": {
            top: "0",
            left: "-5px",
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
