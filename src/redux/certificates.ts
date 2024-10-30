import { createSlice } from "@reduxjs/toolkit";
import { LS_NAMES } from "./const";

export const userData = createSlice({
  name: "userData",
  initialState: {
    selectedCertificate:
      localStorage.getItem(LS_NAMES.selectedCertificate) || "",
    nameSurname: localStorage.getItem(LS_NAMES.nameSurname) || "",
    phoneNumber: localStorage.getItem(LS_NAMES.phoneNumber) || "",
    message: localStorage.getItem(LS_NAMES.message) || "",
    email: localStorage.getItem(LS_NAMES.email) || "",
  },
  reducers: {
    saveCertificateValue: (state, action) => {
      state.selectedCertificate = action.payload;
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
  saveNameSurname,
  savePhoneNumber,
  saveMessage,
  saveEmail,
} = userData.actions;
export default userData.reducer;
