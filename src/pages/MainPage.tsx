import { MainScreen } from "@components/MainScreen";
import { Collections } from "@components/Collections";
import { SearchSection } from "@components/SearchSection";
import { Genres } from "@components/Genres";

export const MainPage = () => (
  <>
    <MainScreen />
    <SearchSection />
    <Genres />
    <Collections />
  </>
);
