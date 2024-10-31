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
    isDisabled,
    setIsDisabled,
    setName,
    setPhoneNumber,
    setMessage,
    setEmail,
    isValidFields,
  } = useFormInputs();

  return (
    <Box sx={layout}>
      <Typography
        variant="h6"
        style={{ opacity: isDisabled ? 0.5 : 1 }}
      >{`Сертификат на ${selectedCertificate.slice(0, -3)} рублей`}</Typography>
      <NameSurnameInput name={name} setName={setName} isDisabled={isDisabled} />
      <PhoneInput
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        isDisabled={isDisabled}
      />
      <MessageInput
        message={message}
        setMessage={setMessage}
        isDisabled={isDisabled}
      />
      <EmailInput email={email} setEmail={setEmail} isDisabled={isDisabled} />
      <Box sx={centeredLayout} style={{ opacity: isDisabled ? 0.5 : 1 }}>
        <Link href="https://sycret.ru/" color="primary" variant="h6">
          Правила
        </Link>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}>
        <BackButton isDisabled={isDisabled} />
        <PayButton
          setIsDisabled={setIsDisabled}
          isDisabled={isDisabled}
          isValidFields={isValidFields}
          name={name}
          phoneNumber={phoneNumber}
          message={message}
          email={email}
        />
      </Box>
    </Box>
  );
}
