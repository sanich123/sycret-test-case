import { API_KEY, BASE_URL, Methods } from "../redux/const";
import { ROUTES } from "../routes/constants";

export function createFormHelperText({
  isError,
  isFocused,
  onErrorText,
  onFocusText,
}: {
  isError: boolean;
  isFocused: boolean;
  onErrorText: string;
  onFocusText: string;
}) {
  if (isError) {
    return onErrorText;
  } else {
    if (isFocused) {
      return onFocusText;
    }
  }
  return " ";
}

export const emailMatcher = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

interface SendUserDataToServerProps {
  setIsClicked: (arg: boolean) => void;
  setIsDisabled: (arg: boolean) => void;
  setIsError: (arg: boolean) => void;
  selectedCertificateId: string;
  phoneNumber: string;
  name: string;
  message: string;
  email: string;
  navigate: (arg: string) => void;
}

export async function sendUserDataToServer({
  setIsClicked,
  setIsDisabled,
  setIsError,
  selectedCertificateId,
  phoneNumber,
  name,
  message,
  email,
  navigate,
}: SendUserDataToServerProps) {
  try {
    setIsDisabled(true);
    const response = await fetch(
      `${BASE_URL}?ApiKey=${API_KEY}&MethodName=${Methods.osSale}&Id=${selectedCertificateId}&Phone=${phoneNumber}&ClientName=${name}&MsgTxt=${message}&Email=${email}`
    );
    const jsonResponse = await response.json();
    if (jsonResponse?.result === 0) {
      navigate(ROUTES.SUCCESS);
    }
  } catch (error) {
    setIsError(true);
  } finally {
    setIsClicked(false);
    setIsDisabled(false);
    setTimeout(() => setIsError(false), 2000);
  }
}
