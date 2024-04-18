import styled from 'styled-components';
import { svgStyles } from '@shared/Icon';
import LogoIcon from '@assets/logo.svg?react';
import UserIcon from '@assets/user.svg?react';

export const HeaderContainer = styled.header<{ $posterUrl: string }>`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 10)
    ),
    url(${({ $posterUrl }) => $posterUrl});
  background-size: cover;
  background-attachment: fixed;
  background-position: top center;
`;
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(LogoIcon)`
  ${(props) => svgStyles(props)}
`;
export const User = styled(UserIcon)`
  ${(props) => svgStyles(props)}
`;
