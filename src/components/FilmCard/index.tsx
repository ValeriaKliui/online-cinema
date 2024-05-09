import { FC } from "react";
import { FilmCardProps } from "./interfaces";
import { Container, Description, FilmImg, ImgContainer } from "./styled";

export const FilmCard: FC<FilmCardProps> = ({
    kinopoiskId,
    posterUrlPreview,
    nameRu,
    year,
    ratingImdb,
    ratingKinopoisk,
}) => (
    <Container key={kinopoiskId}>
        <ImgContainer>
            <FilmImg src={posterUrlPreview} />
        </ImgContainer>
        <Description>
            <p>{nameRu}</p>
            {year && <p>{year}</p>}
            <p>{ratingImdb ?? ratingKinopoisk}</p>
        </Description>
    </Container>
);
