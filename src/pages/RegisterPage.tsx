import { Register } from "@components/Register";
import { PATHS_LINKS } from "@constants/paths";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectUser } from "@store/selectors/user";
import { Navigate } from "react-router-dom";

export const RegisterPage = () => {
  const user = useAppSelector(selectUser);

  if (user) return <Navigate to={PATHS_LINKS.account} />;

  return (
    <>
      <Register />
    </>
  );
};
