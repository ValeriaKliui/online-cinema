import { AuthorizeForm } from "@components/AuthorizeForm";
import { PATHS_LINKS } from "@constants/paths";
import { useLazyLoginUserQuery } from "@store/services/authorizeApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [loginUser, { isSuccess, data }] = useLazyLoginUserQuery();
  const { accessToken, user } = data ?? {};

  useEffect(() => {
    if (isSuccess) {
      navigate(PATHS_LINKS.main);
      accessToken && localStorage.setItem("accessToken", accessToken);
      user?.id && localStorage.setItem("userId", String(user.id));
    }
  }, [isSuccess, navigate, accessToken, user?.id]);

  return (
    <>
      <AuthorizeForm
        title="Логин"
        buttonText="Войти"
        description="Введите свои данные, чтобы  войти в аккаунт"
        onSubmit={loginUser}
      />
    </>
  );
};
