import { AuthorizeForm } from "@components/AuthorizeForm";
import { PATHS_LINKS } from "@constants/paths";
import { useLazyLoginUserQuery } from "@store/services/authorizeApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [loginUser, { isSuccess }] = useLazyLoginUserQuery();

  useEffect(() => {
    if (isSuccess) navigate(PATHS_LINKS.main);
  }, [isSuccess, navigate]);

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
