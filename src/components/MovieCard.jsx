import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MovieInfo = ({ name, value }) => (
  <div className={`movie__${name}`}>
    <span className="info__head">
      {name.replace(/\b\w/g, (l) => l.toUpperCase())}
    </span>
    {value}
  </div>
);

const MovieCard = ({ movies, setMovies }) => {
  function handleView(id) {
    console.log("test");
  }
  return (
    <>
      {movies.map((movie) => {
        return (
          <div className="movie">
            <FavoriteBorderIcon className="love-heart"/>
            <img src={movie.Poster} width={200} height={300} />            

          

            <div className="movie__infos">
              <p>{movie.Released}</p>
              <h2>{movie.Title}</h2>
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