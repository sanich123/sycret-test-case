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
    return `${onErrorText}`;
  } else {
    if (isFocused) {
      return onFocusText;
    }
  }
  return " ";
}