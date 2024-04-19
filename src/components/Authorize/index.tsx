import { Button } from '@/shared/Button';
import {
    Media,
    Container,
    AuthorizeScreen,
    Networks,
} from './styled';
import YtIcon from '@assets/icons/google.svg?react';
import VkSvg from '@assets/icons/vk.svg?react';
import InSvg from '@assets/icons/in.svg?react';
import { AuthorizeForm } from '../AuthorizeForm';

export const Authorize = () => (
    <Container className="wrapper">
        <Media>
            <h5>Регистрация</h5>
            <p className="medium">
                Зарегистрируйтесь, чтобы получить доступ ко всем преимуществам
                нашей платформы. Уже есть аккаунт?
            </p>
            <Button>Войти</Button>
        </Media>
        <AuthorizeScreen>
            <p>ИЗМЕНИТЬ Создать аккаунт</p>
            <Networks>
                <YtIcon />
                <VkSvg />
                <InSvg />
            </Networks>
            <p>или введите email для регистрации</p>
            <AuthorizeForm />
        </AuthorizeScreen>
    </Container>
);
