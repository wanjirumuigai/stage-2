import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, useNavigate } from "react-router-dom";
import { SiImdb } from "react-icons/si";
import { GiTomato } from "react-icons/gi";

const MovieCard = ({ movies, setMovies }) => {
  const navigate = useNavigate();
  const [genres, setGenre] = useState([]);

  return (
    <>
      {movies.map((movie) => {
        return (
          <Link to={`/movie/${movie.id}`}>
            <div data-testid="movie-card" key={movie.id}>
              <div onClick={(e) => e.stopPropagation()}>
                <FavoriteBorderIcon className="love-heart hover:bg-lime-300 " />
              </div>

              <img
                data-testid="movie-poster"
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                width={300}
                height={450}
              />

              <div className="movie__infos">
                <h2 className="font-bold" data-testid="movie-title">
                  {movie.title}
                </h2>
              </div>

              <div className="flex flex-row justify-between gap-1 w-10/12 ">
                <div className="flex flex-row gap-2">
                  <SiImdb className=" bg-yellow-500 text-xl" />{" "}
                  <p className="text-xs">{movie.vote_average}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <GiTomato className=" text-xl" />
                  <p className="text-xs">80%</p>
                </div>
              </div>

              <p data-testid="movie-release-date">
                Release Date (UTC):
                {new Date(movie.release_date).getUTCFullYear()}-
                {new Date(movie.release_date).getUTCMonth() + 1}-
                {new Date(movie.release_date).getUTCDate()}
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default MovieCard;
