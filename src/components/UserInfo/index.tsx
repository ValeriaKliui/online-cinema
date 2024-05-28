import { ACCESS_TOKEN, USER_ID } from "@constants/authorizeApi";
import { Button } from "@shared/Button";
import { useAppDispatch, useAppSelector } from "@store/interfaces/hooks";
import { selectUserEmail } from "@store/selectors/user";
import { logout } from "@store/slices/userSlice";

export const UserInfo = () => {
  const userEmail = useAppSelector(selectUserEmail);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_ID);
  };

  return (
    <div>
      <h4> {userEmail}</h4>
      <Button onClick={onLogout}>Выйти</Button>
    </div>
  );
};
