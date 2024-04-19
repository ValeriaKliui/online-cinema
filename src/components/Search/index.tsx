import { Input } from '@/shared/Input';
import { Container, Text, TextContainer } from './styled';
import SearchIcon from '@assets/icons/search.svg';

export const Search = () => (
    <Container className="wrapper">
        <TextContainer>
            <h5>Поиск по сайту</h5>
            <Text className="subtext">
                На нашем сайте вы найдете подходящие вам фильмы и сериалы
            </Text>
        </TextContainer>
        <Input placeholder='Поиск...' icon={SearchIcon} />
    </Container>
);
