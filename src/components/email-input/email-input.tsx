import React, { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import { EmailInputProps } from "./types";
import { useAppDispatch } from "../../redux/hooks";
import { saveEmail } from "../../redux/certificates";
import { LocalStorageNames } from "../../redux/const";
import { createFormHelperText, emailMatcher } from "../../utils/utils";

export default function EmailInput({
  email,
  setEmail,
  isDisabled,
}: EmailInputProps) {
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
          const trimmedValue = value.trim();
          setEmail(trimmedValue);
          setIsError(!emailMatcher.test(trimmedValue));
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={({ target: { value } }) => {
          const trimmedValue = value.trim();
          setIsFocused(false);
          setIsError(!emailMatcher.test(trimmedValue));
          dispatch(saveEmail(trimmedValue));
          localStorage.setItem(LocalStorageNames.email, trimmedValue);
        }}
        value={email}
        helperText={createFormHelperText({
          isError,
          isFocused,
          onErrorText: "Вы ввели некорректную почту",
          onFocusText: "Введите ваш адрес email",
        })}
        disabled={isDisabled}
      />
    </FormControl>
  );
}
