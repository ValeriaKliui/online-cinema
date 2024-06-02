import { USER_OPTIONS } from "@constants/paths";
import { Option, Container } from "./styled";
import { Link } from "react-router-dom";

export const UserOptions = () => (
  <Container className="wrapper">
    {USER_OPTIONS.map(({ Icon, option, link }) => (
      <Link to={link} key={option}>
        <Option>
          <Icon />
          <p className="m">{option}</p>
        </Option>
      </Link>
    ))}
  </Container>
);
