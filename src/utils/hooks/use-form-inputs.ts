import { useState } from "react";
import { store } from "../../redux/store";
import { emailMatcher } from "../utils";
import { VALID_LENGTH_OF_PHONE_NUMBER } from "../../components/phone-input/phone-input";

export default function useFormInputs() {
  const [name, setName] = useState(store.getState().userData.nameSurname);
  const [phoneNumber, setPhoneNumber] = useState(
    store.getState().userData.phoneNumber
  );
  const [message, setMessage] = useState(store.getState().userData.message);
  const [email, setEmail] = useState(store.getState().userData.email);
  const [isDisabled, setIsDisabled] = useState(false);
  const isValidFields =
    emailMatcher.test(email.trim()) &&
    phoneNumber.length === VALID_LENGTH_OF_PHONE_NUMBER &&
    name.length > 0;
  return {
    name,
    phoneNumber,
    message,
    email,
    isDisabled,
    setName,
    setPhoneNumber,
    setMessage,
    setEmail,
    setIsDisabled,
    isValidFields,
  };
}
