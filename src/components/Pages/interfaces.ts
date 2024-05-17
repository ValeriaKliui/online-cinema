export interface PagesProps {
  pagesAmount: number;
  currentPage: number;
  choosePage: (page: number) => void;
}
