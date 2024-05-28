import { AuthorizeForm } from "@components/AuthorizeForm";
import { ACCESS_TOKEN, USER_ID } from "@constants/authorizeApi";
import { PATHS_LINKS } from "@constants/paths";
import { useError } from "@hooks/useError";
import { useLoginMutation } from "@store/services/userApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [login, { isSuccess, data, error }] = useLoginMutation();
  const authError = useError(error);

  useEffect(() => {
    if (isSuccess) {
      const {
        accessToken,
        user: { id },
      } = data;
      navigate(PATHS_LINKS.main);
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(USER_ID, String(id));
    }
  }, [data, navigate, isSuccess]);

  return (
    <>
      <AuthorizeForm
        title="Логин"
        buttonText="Войти"
        description="Введите свои данные, чтобы  войти в аккаунт"
        onSubmit={login}
        authError={authError}
      />
    </>
  );
};
