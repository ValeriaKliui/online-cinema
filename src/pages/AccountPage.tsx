import { ACCESS_TOKEN } from "@constants/authorizeApi";
import { PATHS_LINKS } from "@constants/paths";
import { Button } from "@shared/Button";
import { useAppDispatch, useAppSelector } from "@store/interfaces/hooks";
import { selectUserEmail } from "@store/selectors/user";
import { useGetUserInfoQuery } from "@store/services/userApi";
import { logoutUser } from "@store/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";

export const AccountPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userID = Number(localStorage.getItem("userId"));
  useGetUserInfoQuery(userID, { skip: !userID });

  const userEmail = useAppSelector(selectUserEmail);

  const onLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem(ACCESS_TOKEN);
    navigate(PATHS_LINKS.register);
  };

  return (
    <div className="wrapper">
      <h4> {userEmail}</h4>
      <Link to={PATHS_LINKS.favourite}>изрбраоон</Link>
      <Button onClick={onLogout}>Выйит</Button>
    </div>
  );
};
