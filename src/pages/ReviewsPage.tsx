import { Pages } from "@components/Pages";
import { Reviews } from "@components/Reviews";
import { ReviewsInfo } from "@components/ReviewsInfo";
import { useFilmSearchParams } from "@hooks/useFilmSearchParams";
import {
  useGetInfoAboutFilmQuery,
  useGetReviewsQuery,
} from "@store/services/filmsApi/filmsApi";
import { useCallback } from "react";
import { useParams } from "react-router-dom";

export const ReviewsPage = () => {
  const kinopoiskId = Number(useParams().kinopoiskId);
  const { filmsSearchParams, updateSearchParams } = useFilmSearchParams();
  const { data } = useGetInfoAboutFilmQuery(kinopoiskId);
  const { nameRu, nameEn, nameOriginal } = data ?? {};

  const { data: reviews } = useGetReviewsQuery({
    kinopoiskId,
    page: filmsSearchParams.page,
  });

  const {
    items = [],
    total = 0,
    totalNegativeReviews = 0,
    totalNeutralReviews = 0,
    totalPositiveReviews = 0,
    totalPages = 0,
  } = reviews ?? {};

  const onPageChange = useCallback(
    (pageNum: number) => {
      updateSearchParams({ page: String(pageNum) });
    },
    [updateSearchParams],
  );

  return (
    <>
      {items.length ? (
        <>
          <ReviewsInfo
            total={total}
            positive={totalPositiveReviews}
            negative={totalNegativeReviews}
            neutral={totalNeutralReviews}
            nameRu={nameRu || nameEn || nameOriginal || ""}
          />
          <Reviews reviews={items} />
          <Pages pagesAmount={totalPages} onPageChange={onPageChange} />
        </>
      ) : (
        <p className="wrapper">Отзывы отсутствуют</p>
      )}
    </>
  );
};
