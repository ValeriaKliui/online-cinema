import { FAVOURITE_FILMS_URL } from '@constants/authorizeApi';
import { API_KEY, FILMS_BASE_URL } from '@constants/filmsApi';

export const fetchInfoAboutFilms = async (filmID: number) => {
  return await fetch(`${FILMS_BASE_URL}/${filmID}`, {
    headers: { 'x-api-key': API_KEY },
  })
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((data) => data.json())
    .catch((error) => console.log('error', error));
};
