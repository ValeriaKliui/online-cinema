import { NAV_LINKS } from "@constants/paths";
import { NavLink } from "react-router-dom";
import { NavList } from "./styled";
import { FC } from "react";
import { NavProps } from "./interfaces";

export const Nav: FC<NavProps> = ({ isColumn = false }) => (
  <nav>
    <NavList $isColumn={isColumn}>
      {NAV_LINKS.map(({ title, path }) => (
        <li key={title}>
          <NavLink to={path}>
            <p>{title}</p>
          </NavLink>
        </li>
      ))}
    </NavList>
  </nav>
);
