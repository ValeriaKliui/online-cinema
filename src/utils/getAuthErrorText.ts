import { AuthorizationErrors } from "@store/slices/appSlice/interfaces";

export const getAuthErrorText = (errorEngText: AuthorizationErrors | null) => {
  let errorText = "";
  if (errorEngText === AuthorizationErrors.EMAIL_EXISTS)
    errorText = "Пользователь с таким email уже зарегестрирован";
  return errorText;
};
