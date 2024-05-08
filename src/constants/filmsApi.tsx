import {
  CollectionType,
  GENRES,
  GENRES_NAMES,
} from "@store/services/interfaces";
import AdventureIcon from "@assets/icons/genres/adventure.svg?react";
import ThrillerIcon from "@assets/icons/genres/thriller.svg?react";
import DramaIcon from "@assets/icons/genres/drama.svg?react";
import CrimeIcon from "@assets/icons/genres/crime.svg?react";
import DetectiveIcon from "@assets/icons/genres/detective.svg?react";
import FantasyIcon from "@assets/icons/genres/fantasy.svg?react";
import WesternIcon from "@assets/icons/genres/western.svg?react";
import HorrorIcon from "@assets/icons/genres/horror.svg?react";
import ComedyIcon from "@assets/icons/genres/comedy.svg?react";

export const API_KEY = "311f6ed2-2da0-4a4e-bda9-3c31df66674a";

export const FILMS_BASE_URL =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films";
export const PREMIERS_URL = "premieres";
export const SEARCH_URL = "search-by-keyword";
export const STAFF_URL = "https://kinopoiskapiunofficial.tech/api/v1/staff";

export const FILMS_URL_V1 =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/";
export const COLLECTION_URL = "collections";

export const collectionTabs = [
  { tab: "Новинки", type: CollectionType.CLOSES_RELEASES },
  { tab: "Популярное", type: CollectionType.TOP_POPULAR_ALL },
  {
    tab: "Оскар",
    type: CollectionType.OSKAR_WINNERS,
  },
  { tab: "Топ фильмов", type: CollectionType.TOP_250_MOVIES },
  { tab: "Топ сериалов", type: CollectionType.TOP_250_TV_SHOWS },
];

export const GENRES_ALL = [
  {
    genre: GENRES.ADVENTURE,
    genreName: GENRES_NAMES.ADVENTURE,
    Icon: AdventureIcon,
    amount: 190,
  },
  {
    genre: GENRES.THRILLER,
    genreName: GENRES_NAMES.THRILLER,
    Icon: ThrillerIcon,
    amount: 100,
  },
  {
    genre: GENRES.DRAMA,
    genreName: GENRES_NAMES.DRAMA,
    Icon: DramaIcon,
    amount: 290,
  },
  {
    genre: GENRES.CRIME,
    genreName: GENRES_NAMES.CRIME,
    Icon: CrimeIcon,
    amount: 102,
  },
  {
    genre: GENRES.DETECTIVE,
    genreName: GENRES_NAMES.DETECTIVE,
    Icon: DetectiveIcon,
    amount: 80,
  },
  {
    genre: GENRES.FANTASTIC,
    genreName: GENRES_NAMES.FANTASTIC,
    Icon: FantasyIcon,
    amount: 122,
  },
  {
    genre: GENRES.WESTERN,
    genreName: GENRES_NAMES.WESTERN,
    Icon: WesternIcon,
    amount: 57,
  },
  {
    genre: GENRES.HORROR,
    genreName: GENRES_NAMES.HORROR,
    Icon: HorrorIcon,
    amount: 80,
  },
  {
    genre: GENRES.COMEDY,
    genreName: GENRES_NAMES.COMEDY,
    Icon: ComedyIcon,
    amount: 120,
  },
];
