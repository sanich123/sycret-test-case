import React from "react";
import { Box, Link, Typography } from "@mui/material";
import NameSurnameInput from "../../components/name-surname-input/name-surname-input";
import PhoneInput from "../../components/phone-input/phone-input";
import MessageInput from "../../components/message-input/message-input";
import EmailInput from "../../components/email-input/email-input";
import useFormInputs from "../../utils/hooks/use-form-inputs";
import { centeredLayout, layout } from "./styles";
import PayButton from "../../components/pay-button/pay-button";
import BackButton from "../../components/back-button/back-button";
import { useAppSelector } from "../../redux/hooks";

export default function Form() {
  const { selectedCertificate } = useAppSelector(({ userData }) => userData);
  const {
    name,
    phoneNumber,
    message,
    email,
    setName,
    setPhoneNumber,
    setMessage,
    setEmail,
    isValidFields,
  } = useFormInputs();

  return (
    <Box sx={layout}>
      <Typography variant="h6">{`Сертификат на ${selectedCertificate.slice(
        0,
        -3
      )} рублей`}</Typography>
      <NameSurnameInput name={name} setName={setName} />
      <PhoneInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
      <MessageInput message={message} setMessage={setMessage} />
      <EmailInput email={email} setEmail={setEmail} />
      <Box sx={centeredLayout}>
        <Link href="https://sycret.ru/" color="primary" variant="h6">
          Правила
        </Link>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}>
        <BackButton />
        <PayButton isValidFields={isValidFields} />
      </Box>
    </Box>
  );
}
