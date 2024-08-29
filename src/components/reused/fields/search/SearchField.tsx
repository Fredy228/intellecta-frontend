import { TextField, TextFieldProps, TextFieldVariants } from "@mui/material";
import { IconMagnifier } from "../../Icon/Icon";
import { FC, useRef } from "react";

type Props = {
  variant?: TextFieldVariants;
} & Omit<TextFieldProps, "variant">;

export const SearchField: FC<Props> = (props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const focusToInput = () => {
    if (searchRef.current) searchRef.current.focus();
  };

  return (
    <div
      style={{
        paddingBottom: "8px",
        borderBottom: "1px solid #0000006B",
      }}
    >
      <IconMagnifier
        onClick={focusToInput}
        style={{ width: "24px", height: "24px", cursor: "pointer" }}
      />
      <TextField
        {...props}
        inputRef={searchRef}
        sx={{
          ".MuiInputBase-root": {
            height: "24px",
            "& input": {
              padding: "0px 8px",
              fontSize: "16px",
              fontWeight: "400",
              color: "#00000061",
            },
            "& fieldset": {
              border: "none",
            },
          },
        }}
        placeholder="Search..."
      />
    </div>
  );
};
