import { Button } from '@/shared/Button';
import { Input } from '@/shared/Input';
import { useLazyRegisterUserQuery } from '@store/services/authorizeApi';
import { useState } from 'react';
import { UserData } from './interfaces';
import { FormContainer } from './styled';

export const AuthorizeForm = () => {
    const [registerUser,
        //  result
    ] = useLazyRegisterUserQuery();
    const [userData, setUserData] = useState<UserData>({
        email: '',
        password: '',
    });

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        registerUser(userData);
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value },
        } = event;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <FormContainer onSubmit={onSubmit} onChange={onChange}>
            <Input placeholder="Логин" light block name="email" />
            <Input placeholder="Пароль" light block name="password" />
            <Button>Зарегистрироваться</Button>
        </FormContainer>
    );
};
