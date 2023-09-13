import React from "react";

import "./App.css";
import MovieCard from "./MovieCard";

function MovieContainer({ movies, setMovies }) {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-4 ml-12 md:mx-auto gap-3 md:w-9/12">
      <MovieCard movies={movies} setMovies={setMovies} />
    </ul>
  );
}
export default MovieContainer;