import { PATHS_LINKS } from "@/constants/paths";
import { useAppSelector } from "@/store/interfaces/hooks";
import { selectRandomFilm } from "@/store/selectors/films";
import { Nav } from "@components/Nav";
import { NavLink } from "react-router-dom";
import { ContentContainer, HeaderContainer, Logo, User } from "./styled";

export const Header = () => {
  const randomFilm = useAppSelector(selectRandomFilm);
  const { posterUrl } = randomFilm ?? {};

  return (
    <HeaderContainer $posterUrl={posterUrl}>
      <ContentContainer className="wrapper">
        <h1>
          <NavLink to={PATHS_LINKS.main}>
            <Logo height="4em" />
          </NavLink>
        </h1>
        <Nav />
        <NavLink to={PATHS_LINKS.register}>
          <User height="2em" width="2em" />
        </NavLink>
      </ContentContainer>
    </HeaderContainer>
  );
};
