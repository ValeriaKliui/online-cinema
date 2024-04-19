import { Button } from '@/shared/Button';
import { Input } from '@/shared/Input';
import { FormContainer } from './styled';

export const AuthorizeForm = () => (
    <FormContainer>
        <Input placeholder="Логин" light block />{' '}
        <Input placeholder="E-mail" light block />
        <Input placeholder="Пароль" light block />
        <Button>Зарегистрироваться</Button>
    </FormContainer>
);
