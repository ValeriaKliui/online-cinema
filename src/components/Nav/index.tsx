import { NAV_LINKS } from "@constants/paths";
import { NavLink } from "react-router-dom";
import { NavList } from "./styled";

export const Nav = () => (
  <nav>
    <NavList>
      {NAV_LINKS.map(({ title, path }) => (
        <li key={title}>
          <NavLink to={path} >
            {title}
          </NavLink>
        </li>
      ))}
    </NavList>
  </nav>
);
