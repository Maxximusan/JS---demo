// это из фильмотеки моя часть 

import MovieApiService from "./fetchModule";
import { onMarkupCards } from "./onMarkupCards";

let test2 = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

const API = new MovieApiService();

localStorage.setItem("savedGenresId", JSON.stringify(test2));

generateTrendingFilms();

function generateTrendingFilms() {
  API.fetchTrending().then(({ results }) => {
    const trandingContainer = document.querySelector(".film__list");
    onMarkupCards(results, trandingContainer);
  });
}

import filmCardTpl from "../templates/filmCards.hbs";

export const onMarkupCards = function (films, container) {
  const markup = films
    .map((film) => {
      const savedGenresId = localStorage.getItem("savedGenresId");

      const obje = {};
      obje.release_date = film.release_date.slice(0, 4);
      obje.id = film.id;
      obje.poster_path = "//image.tmdb.org/t/p/w400" + film.poster_path;
      obje.title = film.title;
      obje.genres = film.genre_ids
        .map((id) => {
          let genresArray = JSON.parse(savedGenresId).find(
            (obj) => obj.id === id
          );

          return genresArray.name;
        })
        .join(", ");

      return filmCardTpl(obje);
    })
    .join("");

  container.insertAdjacentHTML("beforeend", markup);
};
