import { Box, Typography } from "@mui/material";
import React from "react";
import { layout } from "../Form/styles";
import { useSearchParams } from "react-router-dom";

export default function Success() {
  const [searchParams] = useSearchParams();
  return (
    <Box sx={layout}>
      <Typography>Страница оплаты.</Typography>
      <Typography>Передали на сервер следующие данные:</Typography>
      {[...searchParams.entries()].map(([key, value]) => (
        <Typography key={key}>{`${key} : ${value}`}</Typography>
      ))}
    </Box>
  );
}
