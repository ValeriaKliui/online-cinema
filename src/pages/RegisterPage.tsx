import { Register } from "@components/Register";
import { PATHS_LINKS } from "@constants/paths";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectUser } from "@store/selectors/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(PATHS_LINKS.account);
    }
  }, [user, navigate]);

  return (
    <>
      <Register />
    </>
  );
};
