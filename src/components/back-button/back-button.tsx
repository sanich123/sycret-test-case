import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/constants";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button variant="contained" onClick={() => navigate(ROUTES.HOME)}>
      Назад
    </Button>
  );
}
