import React from "react";

import "./App.css";
import MovieCard from "./MovieCard";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "@mui/material";

function MovieContainer({ movies, setMovies }) {
  return (
    <>
      <section className="flex flex-row justify-between md:mx-auto md:w-9/12 my-5">
        <h3>Featured Movies</h3>
        <Link className="flex flex-row items-center no-underline text-red-600">
          <span className="no-underline text-red-600">see more</span>
          <MdOutlineArrowForwardIos />
        </Link>
      </section>
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 ml-12 md:mx-auto gap-3 md:w-9/12">
        <MovieCard movies={movies} setMovies={setMovies} />
      </ul>
    </>
  );
}
export default MovieContainer;
