import { PATHS_LINKS } from "@constants/paths";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectFilmBg } from "@store/selectors/films";
import { Nav } from "@components/Nav";
import { NavLink } from "react-router-dom";
import {
  BurgerWrapper,
  ContentContainer,
  HeaderContainer,
  Logo,
  NavWrapper,
  User,
} from "./styled";
import { useGetUserInfoQuery } from "@store/services/userApi/userApi";
import { ACCESS_TOKEN, USER_ID } from "@constants/user";
import { ThemeToggler } from "@components/ThemeToggler";
import { Burger } from "@shared/Burger";
import { MobileMenu } from "@components/MobileMenu";
import { useRef } from "react";

export const Header = () => {
  const randomFilm = useAppSelector(selectFilmBg);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { posterUrl } = randomFilm ?? {};

  const savedAccessToken = localStorage.getItem(ACCESS_TOKEN);
  const savedUserID = localStorage.getItem(USER_ID) || "";

  useGetUserInfoQuery(savedUserID, {
    skip: !savedAccessToken,
    pollingInterval: 900000,
  });

  const openMenu = () => {
    dialogRef?.current?.showModal();
  };

  return (
    <HeaderContainer $posterUrl={posterUrl}>
      <ContentContainer className="wrapper">
        <h1>
          <NavLink to={PATHS_LINKS.main}>
            <Logo height="4em" color={posterUrl && "white"} />
          </NavLink>
        </h1>
        <NavWrapper>
          <Nav />
        </NavWrapper>
        <ThemeToggler />
        <NavLink to={PATHS_LINKS.account}>
          <User height="2em" width="2em" color={posterUrl && "white"} />
        </NavLink>
        <BurgerWrapper>{<Burger onClick={openMenu} />}</BurgerWrapper>
      </ContentContainer>
      <MobileMenu ref={dialogRef} />
    </HeaderContainer>
  );
};
