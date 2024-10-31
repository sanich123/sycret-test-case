import React, { useState } from "react";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { PhoneInputProps } from "./types";
import { TextMaskCustom } from "./custom-phone-input";
import { useAppDispatch } from "../../redux/hooks";
import { savePhoneNumber } from "../../redux/certificates";
import { LocalStorageNames } from "../../redux/const";
import { createFormHelperText } from "../../utils/utils";

export const VALID_LENGTH_OF_PHONE_NUMBER = 18;

export default function PhoneInput({
  phoneNumber,
  setPhoneNumber,
  isDisabled,
}: PhoneInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <FormControl
      fullWidth
      sx={{ maxWidth: 700, mb: 1 }}
      variant="standard"
      required
    >
      <InputLabel htmlFor="formatted-text-mask-input">Телефон</InputLabel>
      <Input
        disabled={isDisabled}
        error={isError}
        value={phoneNumber}
        onChange={({ target: { value } }) => {
          setIsError(value.length < VALID_LENGTH_OF_PHONE_NUMBER);
          setPhoneNumber(value);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={({ target: { value } }) => {
          setPhoneNumber(value);
          setIsFocused(false);
          setIsError(value.length < VALID_LENGTH_OF_PHONE_NUMBER);
          dispatch(savePhoneNumber(value));
          localStorage.setItem(LocalStorageNames.phoneNumber, value);
        }}
        name="textmask"
        required
        id="formatted-text-mask-input"
        inputComponent={TextMaskCustom as any}
      />
      <FormHelperText style={{ color: isError ? "red" : "" }}>
        {createFormHelperText({
          isError,
          isFocused,
          onErrorText:
            "Телефонный номер должен быть в формате +7 (000) 000-00-00",
          onFocusText: "Введите ваш телефон",
        })}
      </FormHelperText>
    </FormControl>
  );
}
