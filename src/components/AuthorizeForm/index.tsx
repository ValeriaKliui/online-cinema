import { Button } from "@shared/Button";
import { Input } from "@shared/Input";
import { ChangeEvent, FC, SyntheticEvent, useEffect, useState } from "react";
import { AuthorizeFormProps, UserData } from "./interfaces";
import { Container, FormContainer } from "./styled";
import { Networks } from "@components/Register/styled";
import YtIcon from "@assets/icons/google.svg?react";
import VkSvg from "@assets/icons/vk.svg?react";
import InSvg from "@assets/icons/in.svg?react";
import { getAuthErrorText } from "@utils/getAuthErrorText";
import { getAuthErrors } from "@utils/getAuthErrors";

export const AuthorizeForm: FC<AuthorizeFormProps> = ({
  buttonText,
  title,
  description,
  onSubmit,
  block,
  authError,
}) => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<null | string>(null);
  const isSubmitAvailable =
    error === null && userData.email !== "" && userData.password !== "";

  const onChange = (event: ChangeEvent<HTMLFormElement>) => {
    const {
      target: { name, value },
    } = event;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
    setError(null);
  };

  const onFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const error = getAuthErrors(userData);
    setError(error);

    !error && onSubmit(userData);
  };

  useEffect(() => {
    const authErrorText = getAuthErrorText(authError?.error);
    if (authError) setError(authErrorText);
  }, [authError]);

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
        {error && <p>{error}</p>}
        <Button disabled={!isSubmitAvailable}> {buttonText}</Button>
      </FormContainer>
    </Container>
  );
};
