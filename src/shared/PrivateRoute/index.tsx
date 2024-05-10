import { PATHS_LINKS } from "@constants/paths";
import { FC } from "react";
import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "./styled";

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");

  return !accessToken ? (
    <Navigate to={PATHS_LINKS.register} />
  ) : (
    <> {children}</>
  );
};
