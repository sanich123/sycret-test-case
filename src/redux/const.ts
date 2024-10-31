export const BASE_URL = "https://sycret.ru/service/api/api";
export const TIMEOUT = 20000;
export const API_KEY = "011ba11bdcad4fa396660c2ec447ef14";
export const REDUCER_NAME = "sycretApi";
export const LS_CERTIFICATE_NAME = "selectedCertificate";

export const enum LocalStorageNames {
  nameSurname = "nameSurname",
  phoneNumber = "phoneNumber",
  email = "email",
  message = "message",
  selectedCertificate = "selectedCertificate",
  selectedCertificateId = "selectedCertificateId",
}

export const enum Methods {
  osSale = "OSSale",
  osGetGoods = "OSGetGoodList",
}
