import styled from "styled-components";
import { svgStyles } from "@shared/Icon";
import LogoIcon from "@assets/icons/logo.svg?react";
import UserIcon from "@assets/icons/user.svg?react";
import { devices } from "@providers/Theme/constants";

export const HeaderContainer = styled.header<{ $posterUrl?: string }>`
  background: ${({ $posterUrl }) =>
    $posterUrl
      ? `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 10)
    ), url(${$posterUrl})`
      : "transparent"};
  background-size: cover;
  background-attachment: fixed;
  background-position: top center;
  color: ${({ $posterUrl, theme: { colors } }) =>
    $posterUrl ? colors.white : colors.text};
`;
export const ContentContainer = styled.div`
  max-width: 1340px;
  margin: 0 auto;
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
export const BurgerWrapper = styled.div`
  display: none;
  ${devices.md} {
    display: block;
  }
`;
export const NavWrapper = styled.div`
  ${devices.md} {
    display: none;
  }
`;
