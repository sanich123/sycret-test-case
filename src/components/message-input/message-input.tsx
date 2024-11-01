import React, { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import { MessageInputProps } from "./types";
import { useAppDispatch } from "../../redux/hooks";
import { saveMessage } from "../../redux/certificates";
import { LocalStorageNames } from "../../redux/const";

export default function MessageInput({
  message,
  setMessage,
  isDisabled,
}: MessageInputProps) {
  const dispatch = useAppDispatch();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <FormControl fullWidth sx={{ maxWidth: 700, mb: 1 }}>
      <TextField
        disabled={isDisabled}
        label="Сообщение"
        variant="standard"
        onChange={({ target: { value } }) => setMessage(value)}
        onFocus={() => setIsFocused(true)}
        onBlur={({ target: { value } }) => {
          setIsFocused(false);
          dispatch(saveMessage(value));
          localStorage.setItem(LocalStorageNames.message, value);
        }}
        value={message}
        helperText={`${isFocused ? "Введите ваше сообщение" : " "}`}
      />
    </FormControl>
  );
}
