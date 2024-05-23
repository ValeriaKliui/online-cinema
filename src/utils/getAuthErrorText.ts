import { AuthorizationErrors } from "@components/AuthorizeForm/interfaces";

export const getAuthErrorText = (errorEngText?: string | null) => {
  let errorText = errorEngText && errorEngText.replace(/"/g, "");

  switch (errorText) {
    case AuthorizationErrors.EMAIL_EXISTS:
      errorText = "Пользователь с таким email уже зарегестрирован";
      break;
    case AuthorizationErrors.BAD_EMAIL:
      errorText = "Некорректный email";
      break;
    default:
      break;
  }

  return errorText;
};
