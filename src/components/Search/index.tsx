import { Input } from '@/shared/Input';
import { Container, SearchContainer, Text, TextContainer } from './styled';
import SearchIcon from '@assets/icons/search.svg';
import { useLazySearchByKeywordQuery } from '@store/services/filmsApi';
import { ChangeEvent, useState } from 'react';
import { SearchBlock } from './SearchBlock';
// import { useDebounce } from '@hooks/useDebounce';

export const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    // const debouncedValue = useDebounce({ value: searchValue })
    const [searchByKeyword, { data }] = useLazySearchByKeywordQuery()

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        searchByKeyword(e.target.value)
    }

    const { films, searchFilmsCountResult } = data ?? {}


    return (
        <Container className="wrapper">
            <TextContainer>
                <h5>Поиск по сайту</h5>
                <Text className="subtext">
                    На нашем сайте вы найдете подходящие вам фильмы и сериалы
                </Text>
            </TextContainer>
            <SearchContainer>
                <Input placeholder='Поиск...' icon={SearchIcon} onChange={onChange} value={searchValue} />
                <SearchBlock films={films} searchFilmsCountResult={searchFilmsCountResult} />
            </SearchContainer>
        </Container>
    );
}
