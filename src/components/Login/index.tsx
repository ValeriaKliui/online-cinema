import { AuthorizeForm } from "@components/AuthorizeForm";
import { ACCESS_TOKEN, USER_ID } from "@constants/authorizeApi";
import { PATHS_LINKS } from "@constants/paths";
import { useError } from "@hooks/useError";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectUser } from "@store/selectors/user";
import { useLoginMutation } from "@store/services/userApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  // const [loginUser, { isSuccess, data }] = useLazyLoginUserQuery();
  // const { accessToken, user } = data ?? {};
  const [login, { isSuccess, data, error }] = useLoginMutation();
  const user = useAppSelector(selectUser);
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

  useEffect(() => {
    if (user) {
      navigate(PATHS_LINKS.account);
    }
  }, [user, navigate]);

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
