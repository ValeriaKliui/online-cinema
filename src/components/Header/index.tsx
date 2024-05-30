import { PATHS_LINKS } from "@constants/paths";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectRandomFilm } from "@store/selectors/films";
import { Nav } from "@components/Nav";
import { NavLink } from "react-router-dom";
import { ContentContainer, HeaderContainer, Logo, User } from "./styled";
import { useGetUserInfoQuery } from "@store/services/userApi/userApi";
import { ACCESS_TOKEN, USER_ID } from "@constants/user";

export const Header = () => {
  const randomFilm = useAppSelector(selectRandomFilm);
  const { posterUrl } = randomFilm ?? {};

  const savedAccessToken = localStorage.getItem(ACCESS_TOKEN);
  const savedUserID = localStorage.getItem(USER_ID) || "";

  useGetUserInfoQuery(savedUserID, {
    skip: !savedAccessToken,
    pollingInterval: 900000,
  });

  return (
    <HeaderContainer $posterUrl={posterUrl}>
      <ContentContainer className="wrapper">
        <h1>
          <NavLink to={PATHS_LINKS.main}>
            <Logo height="4em" />
          </NavLink>
        </h1>
        <Nav />
        <NavLink to={PATHS_LINKS.account}>
          <User height="2em" width="2em" />
        </NavLink>
      </ContentContainer>
    </HeaderContainer>
  );
};
