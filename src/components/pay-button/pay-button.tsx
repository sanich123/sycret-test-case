import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { PayButtonProps } from "./types";
import { sendUserDataToServer } from "../../utils/utils";

export default function PayButton({
  isValidFields,
  name,
  email,
  phoneNumber,
  message,
  setIsDisabled,
  isDisabled,
}: PayButtonProps) {
  const { selectedCertificateId } = useAppSelector(({ userData }) => userData);
  const [isClicked, setIsClicked] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isClicked) {
      sendUserDataToServer({
        setIsDisabled,
        setIsClicked,
        setIsError,
        selectedCertificateId,
        name,
        email,
        phoneNumber,
        message,
        navigate,
      });
    }
  }, [isClicked]);

  return (
    <Button
      size="large"
      disabled={!isValidFields || isDisabled}
      variant="contained"
      color="success"
      onClick={() => setIsClicked(true)}
    >
      {!isClicked && "Перейти к оплате"}
      {isClicked && "Переходим.."}
      {isError && "Ошибка"}
    </Button>
  );
}
