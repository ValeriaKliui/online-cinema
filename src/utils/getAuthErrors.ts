import { UserData } from "@components/AuthorizeForm/interfaces";

export const getAuthErrors = (userData: UserData) => {
  let error: null | string = null;
  const { email, password } = userData;

  if (!email || !password) error = "Введите email и пароль";
  else if (!email.includes("@")) error = "Введите корректный email";
  else error = null;

  return error;
};
