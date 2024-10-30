import { useState } from "react";
import { store } from "../../redux/store";

export default function useFormInputs() {
  const [name, setName] = useState(store.getState().userData.nameSurname);
  const [phoneNumber, setPhoneNumber] = useState(
    store.getState().userData.phoneNumber
  );
  const [message, setMessage] = useState(store.getState().userData.message);
  const [email, setEmail] = useState(store.getState().userData.email);
  return {
    name,
    phoneNumber,
    message,
    email,
    setName,
    setPhoneNumber,
    setMessage,
    setEmail,
  };
}
