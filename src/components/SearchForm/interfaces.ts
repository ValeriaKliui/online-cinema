import { SearchBlockProps } from "@components/SearchBlock/interfaces";

export type SearchFormProps = Pick<SearchBlockProps, "onKeywordChange"> & {
  initialKeyword: string;
  onFormSubmit: (searchKeyword: string) => void;
};
