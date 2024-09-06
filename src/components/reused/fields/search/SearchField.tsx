import { ChangeEvent, Dispatch, FC, SetStateAction, useRef } from "react";
import { TextField, TextFieldProps, TextFieldVariants } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { IconMagnifier } from "../../Icon/Icon";

type Props = {
  variant?: TextFieldVariants;
  onClickClose: () => void;
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
};

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
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          props.onChange(e.target.value)
        }
        value={props.value}
        inputRef={searchRef}
        sx={{
          width: "350px",
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
      <CloseIcon
        onClick={props.onClickClose}
        fontSize="small"
        sx={{ cursor: "pointer", color: "#0000006B" }}
      />
    </div>
  );
};
