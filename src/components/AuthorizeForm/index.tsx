import { Button } from "@shared/Button";
import { Input } from "@shared/Input";
import { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import { AuthorizeFormProps, UserData } from "./interfaces";
import { Container, FormContainer } from "./styled";
import { Networks } from "@components/Register/styled";
import YtIcon from "@assets/icons/google.svg?react";
import VkSvg from "@assets/icons/vk.svg?react";
import InSvg from "@assets/icons/in.svg?react";
import { getAuthErrorText } from "@utils/getAuthErrorText";

export const AuthorizeForm: FC<AuthorizeFormProps> = ({
  buttonText,
  title,
  description,
  onSubmit,
  block,
  errorText,
}) => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });

  const [errorFinal, setErrorFinal] = useState<null | string>(null);

  const authErrorText = getAuthErrorText(errorText);

  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    const {
      target: { name, value },
    } = event;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
    setErrorFinal(null);
  };

  const onFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const error = getErrors();
    setErrorFinal(error);

    !error && onSubmit(userData);
  };

  const getErrors = () => {
    let error: null | string = null;
    const { email, password } = userData;

    if (!email || !password) error = "Введите email и пароль";
    else if (!email.includes("@")) error = "Введите корректный email";
    else if (authErrorText) error = authErrorText;
    else error = null;

    return error;
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
        <Input placeholder="Email" light block name="email" />
        <Input placeholder="Пароль" light block name="password" />
        {errorFinal && <p>{errorFinal}</p>}
        <Button> {buttonText}</Button>
      </FormContainer>
    </Container>
  );
};
