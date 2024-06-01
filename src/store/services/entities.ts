export interface Film {
  kinopoiskId: number;
  nameRu?: string;
  nameEn?: string | null;
  nameOriginal?: string | null;
  posterUrl?: string;
  posterUrlPreview: string;
  ratingKinopoisk: number | null;
  ratingImdb: number | null;
  year?: number | null;
  description?: string;
  shortDescription?: string;
  countries?: { country: string }[];
  genres?: { country: string }[];
  filmLength?: number;
  filmId?: number;
}

export type Premier = Pick<
  Film,
  | "kinopoiskId"
  | "nameEn"
  | "nameRu"
  | "year"
  | "posterUrl"
  | "posterUrlPreview"
  | "countries"
  | "genres"
  | "filmId"
>;

export type FilmByFilter = Pick<
  Film,
  | "kinopoiskId"
  | "nameEn"
  | "nameRu"
  | "nameOriginal"
  | "countries"
  | "genres"
  | "ratingImdb"
  | "ratingKinopoisk"
  | "year"
  | "posterUrl"
  | "posterUrlPreview"
>;

export type FilmCollection = FilmByFilter & {
  type: CollectionType;
};

export enum CollectionType {
  TOP_POPULAR_ALL = "TOP_POPULAR_ALL",
  TOP_POPULAR_MOVIES = "TOP_POPULAR_MOVIES",
  TOP_250_TV_SHOWS = "TOP_250_TV_SHOWS",
  TOP_250_MOVIES = "TOP_250_MOVIES",
  VAMPIRE_THEME = "VAMPIRE_THEME",
  COMICS_THEME = "COMICS_THEME",
  CLOSES_RELEASES = "CLOSES_RELEASES",
  FAMILY = "FAMILY",
  OSKAR_WINNERS = "OSKAR_WINNERS_2021",
  LOVE_THEME = "LOVE_THEME",
  ZOMBIE_THEME = "ZOMBIE_THEME",
  CATASTROPHE_THEME = "CATASTROPHE_THEME",
  KIDS_ANIMATION_THEME = "KIDS_ANIMATION_THEME",
}

export enum ReviewType {
  POSITIVE = "POSITIVE",
  NEGATIVE = "NEGATIVE",
  NEUTRAL = "NEUTRAL",
}

export interface ReviewData {
  kinopoiskId: number;
  date: string;
  positiveRating: number;
  negativeRating: number;
  author: string;
  title: string;
  description: string;
  type: ReviewType;
}

export type SimilarFilm = Premier;

export interface StaffPerson {
  staffId: number;
  nameRu: string | null;
  description: string;
  posterUrl: string;
  professionKey: PROFESSIONS;
  nameEn: string;
}
export enum PROFESSIONS {
  DIRECTOR = "Режиссер",
  ACTOR = "Актер",
  PRODUCER = "Продюсер",
  WRITER = "Сценарист",
  OPERATOR = "Оператор",
  COMPOSER = "Композитор",
  DESIGN = "Художник",
  EDITOR = "Монтажер",
  PRODUCER_USSR = "Продюсер ",
  TRANSLATOR = "Переводчик",
  VOICE_DIRECTOR = "Озвучка",
  UNKNOWN = "",
}

export enum GENRES {
  THRILLER = 1,
  DRAMA = 2,
  CRIME = 3,
  MELODRAMA = 4,
  DETECTIVE = 5,
  FANTASTIC = 6,
  ADVENTURE = 7,
  WESTERN = 10,
  COMEDY = 13,
  HORROR = 17,
  CARTOONS = 18,
}
export enum GENRES_NAMES {
  THRILLER = "триллер",
  DRAMA = "драма",
  CRIME = "криминал",
  MELODRAMA = "мелодрама",
  DETECTIVE = "детектив",
  FANTASTIC = "фантастика",
  ADVENTURE = "приключения",
  WESTERN = "вестерн",
  COMEDY = "комедия",
  HORROR = "ужасы",
}
