import { Nav } from "@components/Nav";
import { HeaderContainer, Logo, User } from "./styled";
import { useGetPremieresQuery } from "@store/services/filmsApi";

export const Header = () => {
  const { data, error, isLoading } = useGetPremieresQuery({
    year: 2024,
    month: "APRIL",
  });

  console.log(data);

  return (
    <HeaderContainer className="wrapper">
      <Logo height="4em" />
      <Nav />
      <User height="2em" width="2em" />
    </HeaderContainer>
  );
};
