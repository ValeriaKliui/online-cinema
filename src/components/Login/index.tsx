import { AuthorizeForm } from "@components/AuthorizeForm";
import { ACCESS_TOKEN, USER_ID } from "@constants/user";
import { PATHS_LINKS } from "@constants/paths";
import { useError } from "@hooks/useError";
import { useLoginMutation } from "@store/services/userApi/userApi";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectUser } from "@store/selectors/user";

export const Login = () => {
  const navigate = useNavigate();
  const [login, { isSuccess, data, error }] = useLoginMutation();
  const authError = useError(error);

  const user = useAppSelector(selectUser);

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

  if (user) return <Navigate to={PATHS_LINKS.account} />;

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
