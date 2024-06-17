import { PrivateRoute } from "@shared/PrivateRoute";
import HeartIcon from "@assets/icons/heart.svg?react";
import CartIcon from "@assets/icons/shopping-cart.svg?react";
import { GENRES } from "@store/services/entities";
import { lazy } from "react";

const MainPage = lazy(() => import("@pages/MainPage"));
const LoginPage = lazy(() => import("@pages/LoginPage"));
const RegisterPage = lazy(() => import("@pages/RegisterPage"));
const FilmsPage = lazy(() => import("@pages/FilmsPage"));
const FilmPage = lazy(() => import("@pages/FilmPage"));
const FavouritePage = lazy(() => import("@pages/FavouritePage"));
const AccountPage = lazy(() => import("@pages/AccountPage"));
const SearchPage = lazy(() => import("@pages/SearchPage"));
const ReviewsPage = lazy(() => import("@pages/ReviewsPage"));
const NoPage = lazy(() => import("@pages/NoPage"));

export enum PATHS_LINKS {
  main = "/",
  login = "/login",
  register = "/register",
  account = "/account",
  films = "/films",
  favourite = "favourite",
  subscriptions = "subscriptions",
  search = "/search",
  reviews = "/reviews",
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
  {
    element: <ReviewsPage />,
    path: PATHS_LINKS.reviews + "/:kinopoiskId",
  },
  { element: <NoPage />, path: "*" },
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

export const USER_OPTIONS = [
  { Icon: CartIcon, option: "Мои подписки", link: PATHS_LINKS.account },
  { Icon: HeartIcon, option: "Избранное", link: PATHS_LINKS.favourite },
];
