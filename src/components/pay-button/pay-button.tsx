import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/constants";

export default function PayButton({
  isValidFields,
}: {
  isValidFields: boolean;
}) {
  const navigate = useNavigate();
  return (
    <Button
      size="large"
      disabled={!isValidFields}
      variant="contained"
      color="success"
      onClick={() => {
        if (isValidFields) {
          navigate(ROUTES.SUCCESS);
        }
      }}
    >
      Перейти к оплате
    </Button>
  );
}
