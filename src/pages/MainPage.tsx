import { MainScreen } from "@components/MainScreen";
import { Collections } from "@components/Collections";
import { SearchSection } from "@components/SearchSection";
import { Genres } from "@components/Genres";

const MainPage = () => (
  <>
    <MainScreen />
    <SearchSection />
    <Genres />
    <Collections />
  </>
);

export default MainPage;
