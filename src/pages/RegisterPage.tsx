import { Register } from "@components/Register";
import { PATHS_LINKS } from "@constants/paths";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectUser } from "@store/selectors/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {


  return (
    <>
      <Register />
    </>
  );
};
