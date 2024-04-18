import styled from "styled-components";
import { svgStyles } from "@shared/Icon";
import LogoIcon from "@assets/logo.svg?react";
import UserIcon from "@assets/user.svg?react";

export const HeaderContainer = styled.header`
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
