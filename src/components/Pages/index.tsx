import { FC } from "react";
import { PagesProps } from "./interfaces";
import { Container, Page } from "./styled";

export const Pages: FC<PagesProps> = ({
  pagesAmount,
  currentPage,
  choosePage,
}) => {
  const pagesArray = [...Array(pagesAmount).keys()];

  return (
    <Container className="wrapper">
      {pagesArray.map((page) => (
        <Page
          $choosen={page + 1 === currentPage}
          onClick={() => choosePage(page + 1)}
        >
          <h6>{page + 1}</h6>
        </Page>
      ))}
    </Container>
  );
};
