import { AuthorizePage } from '@/pages/AuthorizePage';
import { MainPage } from '../pages/MainPage';

export enum PATHS_LINKS {
  main = '/',
  login = 'login',
}

export const PATHS = [
  {
    element: <MainPage />,
    path: PATHS_LINKS.main,
  },
  { element: <AuthorizePage />, path: PATHS_LINKS.login },
];
export const NAV_LINKS = [
  { title: 'Главная', path: '/' },
  { title: 'f', path: 'ва' },
  { title: 'блабла', path: '/ыва' },
];

export const FOOTER_LINKS = [
  {
    title: 'Iluminous',
    links: [
      { title: 'О нас', link: '#' },
      { title: 'Блог', link: '#' },
      { title: 'Вакансии', link: '#' },
      { title: 'Акции', link: '#' },
    ],
  },
  {
    title: 'Помощь',
    links: [
      { title: 'Вопросы и ответы', link: '#' },
      { title: 'Список устройств', link: '#' },
      { title: 'Дистрибьютерам', link: '#' },
      { title: 'Контакты', link: '#' },
    ],
  }
];
