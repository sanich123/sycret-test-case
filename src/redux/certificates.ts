import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageNames } from "./const";

export const userData = createSlice({
  name: "userData",
  initialState: {
    selectedCertificate:
      localStorage.getItem(LocalStorageNames.selectedCertificate) || "",
    selectedCertificateId:
      localStorage.getItem(LocalStorageNames.selectedCertificateId) || "",
    nameSurname: localStorage.getItem(LocalStorageNames.nameSurname) || "",
    phoneNumber: localStorage.getItem(LocalStorageNames.phoneNumber) || "",
    message: localStorage.getItem(LocalStorageNames.message) || "",
    email: localStorage.getItem(LocalStorageNames.email) || "",
  },
  reducers: {
    saveCertificateValue: (state, action) => {
      state.selectedCertificate = action.payload;
    },
    saveCertificateId: (state, action) => {
      state.selectedCertificateId = action.payload;
    },
    saveNameSurname: (state, action) => {
      state.nameSurname = action.payload;
    },
    savePhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    saveMessage: (state, action) => {
      state.message = action.payload;
    },
    saveEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const {
  saveCertificateValue,
  saveCertificateId,
  saveNameSurname,
  savePhoneNumber,
  saveMessage,
  saveEmail,
} = userData.actions;

export default userData.reducer;
