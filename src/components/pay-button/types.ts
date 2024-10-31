export interface PayButtonProps {
  isValidFields: boolean;
  name: string;
  phoneNumber: string;
  message: string;
  email: string;
  setIsDisabled: (arg: boolean) => void;
  isDisabled: boolean;
}
