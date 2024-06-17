import { FilmCard } from "@components/FilmCard";
import { COLLECTION_TABS } from "@constants/filmsApi";
import { useLazyGetCollectionByTypeQuery } from "@store/services/filmsApi/filmsApi";
import { useCallback } from "react";
import { Container } from "./styled";
import { Slider } from "@shared/Slider";
import { CollectionType, Film } from "@store/services/entities";
import { CollectionTabs } from "@components/CollectionTabs";
import { Spinner } from "@shared/Spinner";
import { Breakpoints } from "@providers/Theme/interfaces";

export const Collections = () => {
  const [requestCollectionType, { data, isFetching }] =
    useLazyGetCollectionByTypeQuery();

  const onTabChange = useCallback(
    (type: CollectionType) => {
      requestCollectionType(type);
    },
    [requestCollectionType]
  );

  const { items = [] } = data ?? {};

  const renderFilm = ({
    kinopoiskId,
    nameRu,
    posterUrlPreview,
    year,
    ratingImdb,
    ratingKinopoisk,
    nameEn,
    nameOriginal,
  }: Film) => (
    <FilmCard
      kinopoiskId={kinopoiskId}
      nameRu={nameRu}
      posterUrlPreview={posterUrlPreview}
      year={year}
      ratingImdb={ratingImdb}
      ratingKinopoisk={ratingKinopoisk}
      nameEn={nameEn}
      nameOriginal={nameOriginal}
    />
  );

  return (
    <>
      <Container className="wrapper">
        <CollectionTabs
          collectionTabs={COLLECTION_TABS}
          onTabChange={onTabChange}
        />
        {isFetching ? (
          <Spinner />
        ) : (
          <Slider
            items={items}
            renderItem={renderFilm}
            itemsAmount={{
              [Breakpoints.xxl]: 5,
              [Breakpoints.lg]: 3,
              [Breakpoints.md]: 2,
              [Breakpoints.sm]: 1,
            }}
          />
        )}
      </Container>
    </>
  );
};
