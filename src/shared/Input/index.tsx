import { FC } from 'react';
import { InputProps } from './interfaces';
import { InputStyled, Container } from './styled';

export const Input: FC<InputProps> = ({ icon, light, block, ...props }) => (
    <Container $icon={icon} $block={block}>
        <InputStyled $light={light} {...props} />
    </Container>
);
