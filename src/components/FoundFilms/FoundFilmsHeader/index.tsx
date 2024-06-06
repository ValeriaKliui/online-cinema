import { PATHS_LINKS } from "@constants/paths";
import { Button } from "@shared/Button";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectSearchKeyword } from "@store/selectors/app";

export const FoundFilmsHeader = ({ onClose }) => {
  const searchKeyword = useAppSelector(selectSearchKeyword);

  return (
    <>
      <Button
        onClick={onClose}
        link={PATHS_LINKS.search + `?keyword=${searchKeyword}&page=1`}
        className="centered-flex"
      >
        Показать все
      </Button>
    </>
  );
};
