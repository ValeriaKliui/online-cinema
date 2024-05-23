import { PATHS_LINKS } from "@constants/paths";
import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PrivateRouteProps } from "./styled";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectUser } from "@store/selectors/user";

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const user = useAppSelector(selectUser);
  const location = useLocation();

  return user ? (
    <> {children}</>
  ) : (
    <Navigate to={PATHS_LINKS.register} state={{ from: location }} />
  );
};
