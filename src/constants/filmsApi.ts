import { CollectionType } from '@store/services/interfaces';

export const API_KEY = '311f6ed2-2da0-4a4e-bda9-3c31df66674a';

export const FILMS_BASE_URL =
  'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
export const PREMIERS_URL = 'premieres';
export const SEARCH_URL = 'search-by-keyword';
export const FILMS_URL_V1 =
  'https://kinopoiskapiunofficial.tech/api/v2.1/films/';
export const COLLECTION_URL = 'collections';

export const collectionTabs = [
  { tab: 'Новинки', type: CollectionType.CLOSES_RELEASES },
  { tab: 'Популярное', type: CollectionType.TOP_POPULAR_ALL },
  {
    tab: 'Оскар',
    type: CollectionType.OSKAR_WINNERS,
  },
  { tab: 'Топ фильмов', type: CollectionType.TOP_250_MOVIES },
  { tab: 'Топ сериалов', type: CollectionType.TOP_250_TV_SHOWS },
];
