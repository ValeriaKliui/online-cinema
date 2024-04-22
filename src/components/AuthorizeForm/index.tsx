import { Button } from '@/shared/Button';
import { Input } from '@/shared/Input';
import { useState } from 'react';
import { FormContainer } from './styled';

export const AuthorizeForm = () => {
    const [
        // userData
        , setUserData] = useState({
            login: '',
            password: '',
        });

    const onSubmit = (event) => {
        event.preventDefault();
    };

    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <FormContainer onSubmit={onSubmit} onChange={onChange}>
            <Input placeholder="Логин" light block name="login" />
            <Input placeholder="Пароль" light block name="password" />
            <Button>Зарегистрироваться</Button>
        </FormContainer>
    );
};
