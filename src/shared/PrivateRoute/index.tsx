import { PATHS_LINKS } from "@constants/paths";
import { FC } from "react";
import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "./styled";
import { ACCESS_TOKEN } from "@constants/authorizeApi";

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  return !accessToken ? (
    <Navigate to={PATHS_LINKS.register} />
  ) : (
    <> {children}</>
  );
};
