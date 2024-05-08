import { Search } from "@components/Search";
import { Container, Text, TextContainer } from "@components/Search/styled";

export const SearchSection = () => (
  <Container className="wrapper">
    <TextContainer>
      <h5>Поиск по сайту</h5>
      <Text className="subtext">
        На нашем сайте вы найдете подходящие вам фильмы и сериалы
      </Text>
    </TextContainer>
    <Search />
  </Container>
);
