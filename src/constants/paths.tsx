import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { AccountPage } from "../pages/AccountPage";
import { PrivateRoute } from "@shared/PrivateRoute";
import { FilmsPage } from "../pages/FilmsPage";
import { FilmPage } from "../pages/FilmPage";

export enum PATHS_LINKS {
  main = "/",
  login = "/login",
  register = "/register",
  account = "/account",
  films = "/films",
}

export const PATHS = [
  {
    element: <MainPage />,
    path: PATHS_LINKS.main,
  },
  { element: <RegisterPage />, path: PATHS_LINKS.register },
  { element: <LoginPage />, path: PATHS_LINKS.login },
  {
    element: (
      <PrivateRoute>
        <AccountPage />
      </PrivateRoute>
    ),
    path: PATHS_LINKS.account,
  },
  { element: <FilmsPage />, path: PATHS_LINKS.films },
  { element: <FilmPage />, path: PATHS_LINKS.films + "/:filmID" },
];
export const NAV_LINKS = [
  { title: "Главная", path: "/" },
  { title: "Фильмы", path: "ва" },
  { title: "Сериалы", path: "/ыва" },
  { title: "Мультфильмы", path: "/ss" },
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
