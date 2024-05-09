import { Film } from '@store/services/interfaces';

export type FilmBlockProps = Pick<
  Film,
  | 'nameRu'
  | 'year'
  | 'filmLength'
  | 'countries'
  | 'genres'
  | 'description'
  | 'posterUrl'
  | 'kinopoiskId'
>;
