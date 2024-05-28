import { UserInfo } from "@components/UserInfo";
import { PATHS_LINKS } from "@constants/paths";
import { Link } from "react-router-dom";

export const AccountPage = () => {
  return (
    <div className="wrapper">
      <UserInfo />
      <Link to={PATHS_LINKS.favourite}>Избранное</Link>
    </div>
  );
};
