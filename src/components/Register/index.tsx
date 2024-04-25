import { Button } from "@/shared/Button";
import { Media, Container, AuthorizeScreen } from "./styled";
import { AuthorizeForm } from "@components/AuthorizeForm";
import { useLazyRegisterUserQuery } from "@store/services/authorizeApi";
import { NavLink, useNavigate } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";
import { useEffect } from "react";

export const Register = () => {
  const navigate = useNavigate();
  const [registerUser, { isSuccess }] = useLazyRegisterUserQuery();

  useEffect(() => {
    if (isSuccess) navigate(PATHS_LINKS.login);
  }, [isSuccess, navigate]);

  return (
    <Container className="wrapper">
      <Media>
        <h5>Регистрация</h5>
        <p className="medium">
          Зарегистрируйтесь, чтобы получить доступ ко всем преимуществам нашей
          платформы. Уже есть аккаунт?
        </p>
        <NavLink to={PATHS_LINKS.login}>
          <Button>Войти</Button>
        </NavLink>
      </Media>
      <AuthorizeScreen>
        <AuthorizeForm
          title="ИЗМЕНИТЬ Создать аккаунт"
          buttonText="Зарегистрироваться"
          description="или введите email для регистрации"
          onSubmit={registerUser}
        />
      </AuthorizeScreen>
    </Container>
  );
};
