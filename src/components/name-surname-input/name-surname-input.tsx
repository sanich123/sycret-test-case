import React, { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import { NameSurnameProps } from "./types";
import { useAppDispatch } from "../../redux/hooks";
import { saveNameSurname } from "../../redux/certificates";
import { LS_NAMES } from "../../redux/const";
import { createFormHelperText } from "../../utils/utils";

export default function NameSurnameInput({
  name,
  setName,
  isDisabled,
}: NameSurnameProps) {
  const dispatch = useAppDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);
  return (
    <FormControl fullWidth sx={{ maxWidth: 700, mb: 1 }}>
      <TextField
        disabled={isDisabled}
        label="ФИО"
        variant="standard"
        required
        error={isError}
        onChange={({ target }) => {
          setName(target.value);
          setIsError(!target.value);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={({ target: { value } }) => {
          setIsFocused(false);
          setIsError(!value);
          dispatch(saveNameSurname(value));
          localStorage.setItem(LS_NAMES.nameSurname, value);
        }}
        value={name}
        helperText={createFormHelperText({
          isError,
          isFocused,
          onErrorText: "Поле не должно быть пустым",
          onFocusText: "Введите ваши данные",
        })}
      />
    </FormControl>
  );
}
