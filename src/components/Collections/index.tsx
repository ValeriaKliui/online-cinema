import { FilmCard } from "@components/FilmCard";
import { collectionTabs } from "@constants/filmsApi";
import { useLazyGetCollectionByTypeQuery } from "@store/services/filmsApi";
import { CollectionType, Film } from "@store/services/interfaces";
import { useEffect, useState } from "react";
import { Container, TabType, Tabs } from "./styled";
import { Slider } from "@shared/Slider";
import { PATHS_LINKS } from "@constants/paths";
import { Link } from "react-router-dom";

export const Collections = () => {
  const [shouldBeReset, setShouldBeReset] = useState(false);
  const [choosenType, setChoosenType] = useState(collectionTabs[0].type);

  const [requestCollectionType, { data }] = useLazyGetCollectionByTypeQuery();

  const onTabClick = (type: CollectionType) => {
    setChoosenType(type);
    requestCollectionType(type);
    setShouldBeReset(true);
  };

  useEffect(() => {
    requestCollectionType(choosenType);
  }, [choosenType, requestCollectionType]);

  const { items } = data ?? {};

  const renderFilm = ({
    kinopoiskId,
    nameRu,
    posterUrlPreview,
    year,
    ratingImdb,
    ratingKinopoisk,
    nameEn,
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
      />
    </Link>
  );

  return (
    <>
      {items && items.length > 0 && (
        <Container className="wrapper">
          <Tabs>
            {collectionTabs.map(({ tab, type }) => (
              <TabType
                key={tab}
                onClick={() => onTabClick(type)}
                $isChoosen={choosenType === type}
              >
                <p>{tab}</p>
              </TabType>
            ))}
          </Tabs>
          <Slider
            items={items}
            renderItem={renderFilm}
            itemsAmount={5}
            shouldBeReset={shouldBeReset}
            setShouldBeReset={setShouldBeReset}
          />
        </Container>
      )}
    </>
  );
};
