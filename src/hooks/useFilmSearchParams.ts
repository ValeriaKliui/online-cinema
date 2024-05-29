import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const useFilmSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filmsSearchParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );

  const updateSearchParams = useCallback(
    (searchParams: { [key: string]: string }) => {
      setSearchParams((prevParams) => ({ ...prevParams, ...searchParams }));
    },
    [setSearchParams],
  );

  return { filmsSearchParams, updateSearchParams };
};
