import SearchIcon from "@assets/icons/search.svg?react";
import { Input } from "@shared/Input";
import { useAppDispatch, useAppSelector } from "@store/interfaces/hooks";
import { selectSearchKeyword } from "@store/selectors/app";
import { setSearchKeyword } from "@store/slices/appSlice";
import { ChangeEvent, SyntheticEvent, useEffect } from "react";

export const SearchForm = ({
  onKeywordChange,
  initialKeyword = "",
  onFormSubmit,
}) => {
  const dispatch = useAppDispatch();

  const searchKeyword = useAppSelector(selectSearchKeyword) || initialKeyword;

  useEffect(() => {
    dispatch(setSearchKeyword(initialKeyword));
  }, [initialKeyword, dispatch]);

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onFormSubmit(searchKeyword);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchKeyword(e.target.value));
    onKeywordChange(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="Поиск..."
        Icon={SearchIcon}
        onChange={onChange}
        value={searchKeyword}
        onIconClick={onSubmit}
      />
    </form>
  );
};
