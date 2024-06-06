import { Circle, Container } from "./styled";
import { useAppDispatch, useAppSelector } from "@store/interfaces/hooks";
import { selectTheme } from "@store/selectors/app";
import { chooseTheme } from "@store/slices/appSlice";
import { ThemeType } from "@providers/Theme/interfaces";

export const ThemeToggler = () => {
  const dispatch = useAppDispatch();
  const activeTheme = useAppSelector(selectTheme);

  const toggleTheme = () => {
    const theme =
      activeTheme === ThemeType.dark ? ThemeType.light : ThemeType.dark;
    dispatch(chooseTheme(theme));
    localStorage.setItem("theme", theme);
  };

  return (
    <Container onClick={toggleTheme}>
      <Circle
        type="checkbox"
        value={activeTheme}
        checked={activeTheme === ThemeType.light}
        onChange={toggleTheme}
      />
    </Container>
  );
};
