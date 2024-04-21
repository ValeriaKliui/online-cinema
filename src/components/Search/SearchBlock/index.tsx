import { FC } from 'react';
import { Container, Poster, SearchItem, PosterImg } from './styled';
import { SearchBlockProps } from './interfaces';
import { formatArrayToStrings } from '@utils/formatArrayToStrings';
import { Button } from '@shared/Button';

export const SearchBlock: FC<SearchBlockProps> = ({ films, searchFilmsCountResult }) => (
    <Container>
        {films &&
            films.map(
                ({ nameRu, posterUrlPreview, year, countries, genres, filmId }) => (
                    <SearchItem key={filmId}>
                        <Poster>
                            <PosterImg src={posterUrlPreview} />
                        </Poster>
                        <div>
                            <h4>
                                {nameRu}
                            </h4>
                            {year && <p>{year}</p>}
                            <p>{formatArrayToStrings(countries)}</p>
                            <p>{formatArrayToStrings(genres)}</p></div>
                    </SearchItem>
                )
            )}
        {searchFilmsCountResult && searchFilmsCountResult > 20 && <Button>Показать все</Button>}
    </Container>
);
