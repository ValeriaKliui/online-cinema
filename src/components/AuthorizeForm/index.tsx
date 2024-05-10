import { Button } from "@shared/Button";
import { Input } from "@shared/Input";
import { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import { AuthorizeFormProps, UserData } from "./interfaces";
import { Container, FormContainer } from "./styled";
import { Networks } from "@components/Register/styled";
import YtIcon from "@assets/icons/google.svg?react";
import VkSvg from "@assets/icons/vk.svg?react";
import InSvg from "@assets/icons/in.svg?react";
import { selectAuthError } from "@store/selectors/user";
import { useAppSelector } from "@store/interfaces/hooks";
import { getAuthErrorText } from "@utils/getAuthErrorText";

export const AuthorizeForm: FC<AuthorizeFormProps> = ({
  buttonText,
  title,
  description,
  onSubmit,
  block,
}) => {
  const authorizeError = useAppSelector(selectAuthError);
  const authErrorText = getAuthErrorText(authorizeError);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });

  const handleErrors = () => {
    const { email, password } = userData;
    if (!email.includes("@")) setError("Введите корректный email");
    if (password.length < 4)
      setError("Длина пароля должна быть больше 4 символов");
    if (authErrorText) setError(authErrorText);
    setError("");
  };

  const onFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    handleErrors();
    onSubmit(userData);
  };

  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    const {
      target: { name, value },
    } = event;
    error && setError("");
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Container>
      <p className="xl">{title}</p>
      <Networks>
        <YtIcon />
        <VkSvg />
        <InSvg />
      </Networks>
      <p>{description}</p>
      <FormContainer onSubmit={onFormSubmit} onChange={onChange} $block={block}>
        <Input placeholder="Логин" light block name="email" />
        <Input placeholder="Пароль" light block name="password" />
        {error && <p>{error}</p>}
        <Button>{buttonText}</Button>
      </FormContainer>
    </Container>
  );
};
