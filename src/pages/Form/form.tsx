import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/constants";
import NameSurnameInput from "../../components/name-surname-input/name-surname-input";
import PhoneInput from "../../components/phone-input/phone-input";
import MessageInput from "../../components/message-input/message-input";
import EmailInput from "../../components/email-input/email-input";
import useFormInputs from "../../utils/hooks/use-form-inputs";
import { layout } from "./styles";

export default function Form() {
  const navigate = useNavigate();
  const {
    name,
    phoneNumber,
    message,
    email,
    setName,
    setPhoneNumber,
    setMessage,
    setEmail,
  } = useFormInputs();
  return (
    <Box sx={layout}>
      <NameSurnameInput name={name} setName={setName} />
      <PhoneInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
      <MessageInput message={message} setMessage={setMessage} />
      <EmailInput email={email} setEmail={setEmail} />
      <Box sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}>
        <Button variant="contained" onClick={() => navigate(ROUTES.HOME)}>
          Назад
        </Button>
        <Button
          size="large"
          disabled={!email || !phoneNumber || !name}
          variant="contained"
          color="success"
          onClick={() => {
            if (email && phoneNumber && name) {
              navigate(ROUTES.SUCCESS);
            }
            console.log(email, phoneNumber, name);
          }}
        >
          Перейти к оплате
        </Button>
      </Box>
    </Box>
  );
}
