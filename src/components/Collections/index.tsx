import { collectionTabs } from "@constants/filmsApi";
import { useLazyGetCollectionByTypeQuery } from "@store/services/filmsApi";
import { CollectionType } from "@store/services/interfaces";
import { useEffect, useState } from "react";
import { Container, Films, TabType, Tabs, FilmImg } from "./styled";

export const Collections = () => {
  const [choosenType, setChoosenType] = useState(collectionTabs[0].type);

  const [requestCollectionType, result] = useLazyGetCollectionByTypeQuery();

  const onTabClick = (type: CollectionType) => {
    setChoosenType(type);
    requestCollectionType(type);
  };

  useEffect(() => {
    requestCollectionType(choosenType);
  }, [choosenType, requestCollectionType]);

  const { data: { items } = {} } = result;

  return (
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
      <Films>
        {items?.map(
          ({
            kinopoiskId,
            nameRu,
            posterUrlPreview,
            year,
            ratingImdb,
            ratingKinopoisk,
          }) => (
            <div key={kinopoiskId}>
              <FilmImg src={posterUrlPreview} />
              <p>{nameRu}</p>
              {year && <p>{year}</p>}
              {ratingImdb ?? ratingKinopoisk}
            </div>
          ),
        )}
      </Films>
    </Container>
  );
};
