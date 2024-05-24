import { ACCESS_TOKEN, USER_ID } from "@constants/authorizeApi";
import { PATHS_LINKS } from "@constants/paths";
import { Button } from "@shared/Button";
import { useAppDispatch, useAppSelector } from "@store/interfaces/hooks";
import { selectUserEmail } from "@store/selectors/user";
import { logout } from "@store/slices/userSlice";
import { Link } from "react-router-dom";

export const AccountPage = () => {
  const dispatch = useAppDispatch();

  const userEmail = useAppSelector(selectUserEmail);

  const onLogout = () => {
    dispatch(logout());
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_ID);
  };

  return (
    <div className="wrapper">
      <h4> {userEmail}</h4>
      <Link to={PATHS_LINKS.favourite}>Избранное</Link>
      <Button onClick={onLogout}>Выйти</Button>
    </div>
  );
};
