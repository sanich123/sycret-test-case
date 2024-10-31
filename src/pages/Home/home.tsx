import React, { useState } from "react";
import {
  CircularProgress,
  InputLabel,
  FormControl,
  Select,
  Box,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useGetCertificatesByApiKeyQuery } from "../../redux/sycret-api";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes/const";
import { store } from "../../redux/store";
import {
  saveCertificateId,
  saveCertificateValue,
} from "../../redux/certificates";
import { useAppDispatch } from "../../redux/hooks";
import { LocalStorageNames, Methods } from "../../redux/const";
import { layout } from "../Form/styles";
import { CertificatesFromBackend } from "./types";

export default function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedCertificate, setSelectedCertificate] = useState(
    store.getState().userData.selectedCertificate
  );

  const {
    data: certificatesInfo,
    isSuccess,
    isLoading,
    isError,
  } = useGetCertificatesByApiKeyQuery(Methods.osGetGoods);

  return (
    <Box component="form" sx={{ minWidth: 200, ...layout }}>
      {isLoading && <CircularProgress />}
      {isSuccess && (
        <FormControl fullWidth required sx={{ maxWidth: 700 }}>
          <InputLabel id="certificates-form" variant="outlined">
            Выберите сертификат
          </InputLabel>
          <Select
            labelId="certificates-form"
            id="certificates-form-select"
            label="Выберите сертификат"
            onChange={({ target: { value } }: SelectChangeEvent) => {
              setSelectedCertificate(value);
              localStorage.setItem(
                LocalStorageNames.selectedCertificate,
                value
              );
              dispatch(saveCertificateValue(value));
            }}
            value={selectedCertificate}
          >
            {certificatesInfo?.data.map(
              ({
                NAME: name,
                ID: id,
                PRICE: price,
              }: CertificatesFromBackend) => (
                <MenuItem
                  value={price}
                  key={id}
                  onClick={() => {
                    dispatch(saveCertificateId(id));
                    localStorage.setItem(
                      LocalStorageNames.selectedCertificateId,
                      id
                    );
                  }}
                >
                  {name}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      )}
      {isError && <p>Во время получения данных произошла ошибка</p>}
      {isSuccess && selectedCertificate && (
        <Box sx={styles.buttonsLayout}>
          <Typography variant="h6" component="h6">
            {`Цена - ${selectedCertificate.slice(0, -3)} р.`}
          </Typography>
          <Button variant="contained" onClick={() => navigate(Routes.form)}>
            Купить
          </Button>
        </Box>
      )}
    </Box>
  );
}

const styles = {
  buttonsLayout: {
    minWidth: 200,
    display: "flex",
    flexDirection: "row",
    margin: 2,
    columnGap: 3,
  },
};
