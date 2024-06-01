export interface PagesProps {
  pagesAmount: number | string;
  onPageChange: (pageNum: number) => void;
  initPage?: number;
}
