import { SearchedFilm } from '@store/services/interfaces';

export interface SearchBlockProps {
  films?: SearchedFilm[];
  searchFilmsCountResult?: number;
}
