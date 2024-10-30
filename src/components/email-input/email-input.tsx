import React, { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import { EmailInputProps } from "./types";
import { useAppDispatch } from "../../redux/hooks";
import { saveEmail } from "../../redux/certificates";
import { LS_NAMES } from "../../redux/const";
import { createFormHelperText } from "../../utils/utils";

export default function EmailInput({ email, setEmail }: EmailInputProps) {
  const dispatch = useAppDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);
  return (
    <FormControl fullWidth sx={{ maxWidth: 700 }}>
      <TextField
        label="Email"
        variant="standard"
        required
        error={isError}
        onChange={({ target: { value } }) => {
          setEmail(value);
          setIsError(!value);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={({ target: { value } }) => {
          setIsFocused(false);
          setIsError(!value);
          dispatch(saveEmail(value));
          localStorage.setItem(LS_NAMES.email, value);
        }}
        value={email}
        helperText={createFormHelperText({
          isError,
          isFocused,
          onErrorText: "Валидный адрес email",
          onFocusText: "Введите ваши данные",
        })}
      />
    </FormControl>
  );
}