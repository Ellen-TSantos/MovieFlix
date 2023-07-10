import axios from "axios";
import { API_KEY, BASE_URL, TOKEN, LANGUAGE } from "@env";

export const listMoviesPopular = (setState) => {
  axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}&${LANGUAGE}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": `application/json;charset=utf-8`,
      },
    })
    .then((response) => {
      setState(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const listMoviesFamily = (setState) => {
  axios.get(`${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=10751&${LANGUAGE}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": `application/json;charset=utf-8`,
        },
      }
    )
    .then((response) => {
      setState(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const listMoviesWestern = (setState) => {
  axios.get( `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=37&${LANGUAGE}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": `application/json;charset=utf-8`,
        },
      }
    )
    .then((response) => {
      setState(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const listMoviesWar = (setState) => {
  axios.get(`${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=10752&${LANGUAGE}`,
      {
        headers: {
          Authorization: `Bearer  ${TOKEN}`,
          "Content-Type": `application/json;charset=utf-8`,
        },
      }
    )
    .then((response) => {
      setState(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDatails = axios.create({
  baseURL: `${BASE_URL}movie/`,
});
