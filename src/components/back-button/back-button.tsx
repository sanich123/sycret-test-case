import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes/const";

export default function BackButton({ isDisabled }: { isDisabled: boolean }) {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      onClick={() => navigate(Routes.home)}
      disabled={isDisabled}
    >
      Назад
    </Button>
  );
}
