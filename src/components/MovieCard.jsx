import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movies, setMovies }) => {
  const navigate = useNavigate();
  function handleView(id) {
    navigate(`/movie/${id}`);
  }
  return (
    <>
      {movies.map((movie) => {
        return (
          <div
            className="movie"
            data-testid="movie-card"
            onClick={() => handleView(movie.id)}
            key={movie.id}
          >
            <FavoriteBorderIcon className="love-heart" />

            <img
              data-testid="movie-poster"
              src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
              width={200}
              height={300}
            />

            <div className="movie__infos">
              <p data-testid="movie-release-date">{movie.release_date}</p>
              <h2 data-testid="movie-title">{movie.original_title}</h2>
            </div>

            <div className="movie__imdb">
              <a
                href={movie.imdbLink}
                className="movie__imdb-button"
                target="blank"
              >
                {" "}
                IMDb{" "}
              </a>
              <p>{movie.Genre}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieCard;
