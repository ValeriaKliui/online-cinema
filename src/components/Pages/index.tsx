import { FC } from "react";
import { PagesProps } from "./interfaces";
import { Container, Page, TextButton } from "./styled";

export const Pages: FC<PagesProps> = ({
  pagesAmount,
  currentPage,
  choosePage,
}) => {
  const pagesArray = [...Array(pagesAmount).keys()];
  const leftBoundary = currentPage <= 3 ? 0 : currentPage - 3;
  const rightBoundary = currentPage <= 3 ? 5 : currentPage + 2;
  const showingPages = pagesArray.slice(leftBoundary, rightBoundary);

  const isPrevPages = currentPage > 1;
  const isNextPages = currentPage < pagesAmount;

  const choosePrevPage = () => isPrevPages && choosePage(currentPage - 1);
  const chooseNextPage = () => isNextPages && choosePage(currentPage + 1);

  return (
    <Container className="wrapper">
      <TextButton onClick={choosePrevPage} $isAvailable={isPrevPages}>
        Назад
      </TextButton>
      {showingPages.map((page) => (
        <Page
          onClick={() => choosePage(page + 1)}
          $choosen={page + 1 === currentPage}
          key={page}
        >
          <h6>{page + 1}</h6>
        </Page>
      ))}
      <TextButton onClick={chooseNextPage} $isAvailable={isNextPages}>
        Вперед
      </TextButton>
    </Container>
  );
};
