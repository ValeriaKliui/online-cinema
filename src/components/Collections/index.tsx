import { FilmCard } from '@components/FilmCard';
import { collectionTabs } from '@constants/filmsApi';
import { PATHS_LINKS } from '@constants/paths';
import { useLazyGetCollectionByTypeQuery } from '@store/services/filmsApi';
import { CollectionType } from '@store/services/interfaces';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Films, TabType, Tabs, FilmImg } from './styled';

export const Collections = () => {
  const [choosenType, setChoosenType] = useState(
    collectionTabs[0].type
  );

  const [requestCollectionType, result] =
    useLazyGetCollectionByTypeQuery();

  const onTabClick = (type: CollectionType) => {
    setChoosenType(type);
    requestCollectionType(type);
  };

  useEffect(() => {
    requestCollectionType(choosenType);
  }, [choosenType, requestCollectionType]);

  const { data: { items } = {} } = result;

  return (
    <>{
      items && items.length > 0 && <Container className="wrapper">
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
          ARROW
          {items
            ?.slice(0, 5)
            .map(
              ({
                kinopoiskId,
                nameRu,
                posterUrlPreview,
                year,
                ratingImdb,
                ratingKinopoisk,
              }) => (
                <Link to={PATHS_LINKS.films + "/" + kinopoiskId}>
                  <FilmCard
                    kinopoiskId={kinopoiskId}
                    nameRu={nameRu}
                    posterUrlPreview={posterUrlPreview}
                    year={year}
                    ratingImdb={ratingImdb}
                    ratingKinopoisk={ratingKinopoisk}
                  />
                </Link>
              )
            )}
        </Films>
      </Container>
    }</>
  );
};
