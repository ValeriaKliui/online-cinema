import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { AccountPage } from "../pages/AccountPage";
import { PrivateRoute } from "@shared/PrivateRoute";
import { FilmsPage } from "../pages/FilmsPage";
import { FilmPage } from "../pages/FilmPage";
import { FavouritePage } from "../pages/FavouritePage";
import { SearchPage } from "../pages/SearchPage";
import { GENRES } from "@store/services/interfaces";

export enum PATHS_LINKS {
  main = "/",
  login = "/login",
  register = "/register",
  account = "/account",
  films = "/films",
  favourite = "favourite",
  search = "/search",
}

export const PATHS = [
  {
    element: <MainPage />,
    path: PATHS_LINKS.main,
  },
  { element: <RegisterPage />, path: PATHS_LINKS.register },
  { element: <LoginPage />, path: PATHS_LINKS.login },
  {
    path: PATHS_LINKS.account,
    children: [
      {
        element: (
          <PrivateRoute>
            <AccountPage />
          </PrivateRoute>
        ),
        index: true,
      },
      {
        element: (
          <PrivateRoute>
            <FavouritePage />
          </PrivateRoute>
        ),
        path: PATHS_LINKS.favourite,
      },
    ],
  },
  { element: <FilmsPage />, path: PATHS_LINKS.films },
  { element: <SearchPage />, path: PATHS_LINKS.search },
  { element: <FilmPage />, path: PATHS_LINKS.films + "/:kinopoiskId" },
];
export const NAV_LINKS = [
  { title: "Главная", path: PATHS_LINKS.main },
  { title: "Фильмы", path: PATHS_LINKS.films },
  { title: "Сериалы", path: PATHS_LINKS.films + "?type=TV_SERIES&page=1" },
  {
    title: "Мультфильмы",
    path: PATHS_LINKS.films + `?genres=${GENRES.CARTOONS}&page=1`,
  },
];

export const FOOTER_LINKS = [
  {
    title: "Iluminous",
    links: [
      { title: "О нас", link: "#" },
      { title: "Блог", link: "#" },
      { title: "Вакансии", link: "#" },
      { title: "Акции", link: "#" },
    ],
  },
  {
    title: "Помощь",
    links: [
      { title: "Вопросы и ответы", link: "#" },
      { title: "Список устройств", link: "#" },
      { title: "Дистрибьютерам", link: "#" },
      { title: "Контакты", link: "#" },
    ],
  },
];
