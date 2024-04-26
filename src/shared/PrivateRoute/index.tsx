import { PATHS_LINKS } from "@constants/paths";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");

  return !accessToken ? (
    <Navigate to={PATHS_LINKS.register} />
  ) : (
    <> {children}</>
  );
};
