import { FilmCard } from "@components/FilmCard";
import { COLLECTION_TABS } from "@constants/filmsApi";
import { useLazyGetCollectionByTypeQuery } from "@store/services/filmsApi/filmsApi";
import { useCallback, useState } from "react";
import { Container } from "./styled";
import { Slider } from "@shared/Slider";
import { PATHS_LINKS } from "@constants/paths";
import { Link } from "react-router-dom";
import { CollectionType, Film } from "@store/services/entities";
import { CollectionTabs } from "@components/CollectionTabs";
import { Spinner } from "@shared/Spinner";

export const Collections = () => {
  const [shouldBeReset, setShouldBeReset] = useState(false);

  const [requestCollectionType, { data, isFetching }] =
    useLazyGetCollectionByTypeQuery();

  const onTabChange = useCallback(
    (type: CollectionType) => {
      requestCollectionType(type);
      setShouldBeReset(true);
    },
    [requestCollectionType],
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
    <Link to={PATHS_LINKS.films + "/" + kinopoiskId} key={kinopoiskId}>
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
    </Link>
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
            itemsAmount={5}
            shouldBeReset={shouldBeReset}
            setShouldBeReset={setShouldBeReset}
          />
        )}
      </Container>
    </>
  );
};
