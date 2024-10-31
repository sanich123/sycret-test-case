import { Box, Typography } from "@mui/material";
import React from "react";
import { layout } from "../Form/styles";

export default function Success() {
  return (
    <Box sx={layout}>
      <Typography>Успешно произвели оплату сертификата!</Typography>
    </Box>
  );
}
