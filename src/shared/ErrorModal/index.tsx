import { useAppSelector } from "@store/interfaces/hooks";

export const ErrorModal = () => {
  const isError = useAppSelector((state) => state.app.isFilmsError);

  isError && alert(isError);
  return <div></div>;
};
