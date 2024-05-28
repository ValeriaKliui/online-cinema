import {
  COLLECTION_URL,
  FILMS_BASE_URL,
  PREMIERS_URL,
  SEARCH_URL,
  STAFF_URL,
} from "@constants/filmsApi";
import { getFiltersUrl } from "@utils/getFiltersUrl";
import { api } from "./api";
import { fetchInfoAboutFilms } from "./apiUtils";
import {
  CollectionResponse,
  CollectionType,
  Film,
  FilmInfoResponse,
  FilmsByFilterResponse,
  FilterParams,
  ImagesResponse,
  Premier,
  PremierParams,
  ReviewsResponse,
  SearchParams,
  SearchResponse,
  SimilarFilmsResponse,
  StaffPerson,
} from "./interfaces";

export const filmsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPremieres: builder.query<Premier[], PremierParams>({
      query: ({ year, month }) => ({
        url: `${PREMIERS_URL}?year=${year}&month=${month}`,
      }),
      transformResponse: (response: { items: Premier[] }) => response.items,
    }),
    getInfoAboutFilm: builder.query<Film, number>({
      query: (filmID) => `${FILMS_BASE_URL}/${filmID}`,
    }),
    getInfoAboutFilms: builder.query<FilmInfoResponse, number[]>({
      queryFn: (ids) => {
        const promises = ids.map((id) => {
          return fetchInfoAboutFilms(id);
        });

        return Promise.allSettled(promises)

          .then((results) => results.filter((result) => result.value))
          .then((results) => results.map((result) => result.value))
          .then((values) => ({ data: values }));
      },
    }),
    searchByKeyword: builder.query<SearchResponse, SearchParams>({
      query: ({ keyword, page = 1 }: SearchParams) =>
        `${SEARCH_URL}?keyword=${keyword}&page=${page}`,
    }),
    getCollectionByType: builder.query<CollectionResponse, string>({
      query: (collectionType: CollectionType) =>
        `${COLLECTION_URL}?type=${collectionType}`,
    }),
    getStaffInfo: builder.query<StaffPerson[], number>({
      query: (filmID: number) => `${STAFF_URL}?filmId=${filmID}`,
    }),
    getReviews: builder.query<ReviewsResponse, number>({
      query: (filmID: number) =>
        `${FILMS_BASE_URL}/${filmID}/reviews?page=1&order=DATE_DESC`,
    }),
    getImages: builder.query<ImagesResponse, number>({
      query: (filmID: number) => `${FILMS_BASE_URL}/${filmID}/images`,
    }),
    getSimilarFilms: builder.query<SimilarFilmsResponse, number>({
      query: (filmID: number) => `${FILMS_BASE_URL}/${filmID}/similars`,
    }),
    getFilmsByFilters: builder.query<FilmsByFilterResponse, FilterParams>({
      query: (options: FilterParams) =>
        `${FILMS_BASE_URL}${getFiltersUrl(options)}`,
    }),
  }),
});

export const {
  useGetPremieresQuery,
  useGetInfoAboutFilmQuery,
  useLazySearchByKeywordQuery,
  useLazyGetCollectionByTypeQuery,
  useGetStaffInfoQuery,
  useGetReviewsQuery,
  useGetImagesQuery,
  useGetSimilarFilmsQuery,
  useGetInfoAboutFilmsQuery,
  useLazyGetFilmsByFiltersQuery,
  useSearchByKeywordQuery,
} = filmsApi;
