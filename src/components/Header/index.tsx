import { useAppSelector } from "@/store/interfaces/hooks";
import { selectRandomFilm } from "@/store/selectors/films";
import { Nav } from "@components/Nav";
import { ContentContainer, HeaderContainer, Logo, User } from "./styled";

export const Header = () => {
  const randomFilm = useAppSelector(selectRandomFilm);
  const { posterUrl } = randomFilm ?? {};

  return (
    <HeaderContainer $posterUrl={posterUrl}>
      <ContentContainer className="wrapper">
        <h1>
          <Logo height="4em" />
        </h1>
        <Nav />
        <User height="2em" width="2em" />
      </ContentContainer>
    </HeaderContainer>
  );
};
