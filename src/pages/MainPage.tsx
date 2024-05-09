import { MainScreen } from "@components/MainScreen";
import { Collections } from "@components/Collections";
import { useAppDispatch } from "@store/interfaces/hooks";
import { unsetPremier } from "@store/slices/filmsSlice/filmsSlice";
import { useEffect } from "react";
import { SearchSection } from "@components/SearchSection";
import { Genres } from "@components/Genres";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      dispatch(unsetPremier());
    };
  }, [dispatch]);

  return (
    <>
      <MainScreen />
      <SearchSection />
      <Genres />
      <Collections />
    </>
  );
};
