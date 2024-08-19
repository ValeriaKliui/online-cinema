import { API_KEY, FILMS_BASE_URL } from "@constants/filmsApi";

export const fetchInfoAboutFilms = async (filmID: number) => {
  return await fetch(`${FILMS_BASE_URL}/${filmID}`, {
    headers: {
      "x-api-key": API_KEY,
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "HEAD,GET,OPTIONS,PATCH,DELETE,POST,PUT",
      "Access-Control-Allow-Headers":
        "Access-Control-Allow-Headers, Origin, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    },
  })
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((data) => data.json())
    .catch((error) => console.log("error", error));
};
