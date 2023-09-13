import { StarBorder } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { AiOutlineStar } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const OneMovieCard = () => {
  const [movie, setMovies] = useState([]);
  const [genres, setGenre] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoaded] = useState(false);

  let { id } = useParams();

  const date_string = movie.release_date;
  const date = new Date(date_string);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d7bd4c29e3d9fc1a071c5d5a7cd4403b`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid ID");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setGenre(data.genres);
        setLoaded(true);
      })
      .catch((error) => {
        // Redirect to the error page with the error message
        navigate(`/error/${error.message}`);
      });
  }, [navigate]);

  if (!loading) {
    return (
      <>
        <h3>Loading ...</h3>
        <div className="loader"></div>
      </>
    );
  }
  console.log(movie);

  return (
    <>
      <Sidebar />
      <div className=" w-full mx-2 mt-5 md:ml-80">
        <Card sx={{ maxWidth: 900 }}>
          <CardMedia
            component="img"
            alt={movie.original_title}
            image={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            sx={{ maxWidth: 900, height: 450, objectFit: "fill" }}
          />
        </Card>
        <Card sx={{ maxWidth: 900 }}>
          <CardContent>
            <div className="block  md:flex md:flex-row justify-between">
              <div className="block md:flex md:flex-row justify-between w-1/2">
                <h5 data-testid="movie-title">{movie.original_title} </h5>
                <h5 data-testid="movie-release-date">
                  {date.getUTCFullYear()}
                </h5>
                <h5 data-testid="movie-runtime">{movie.runtime}</h5>
                {movie.rated}
                {genres.map((item) => {
                  return (
                    <button
                      className="bg-transparent mt-0 px-5 mr-2 mb-2 text-sm hover:bg-red-700 hover:text-white text-red-600 font-light px-2 rounded-full"
                      key={item.id}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
              <div className="flex flex-col md:flex-row ">
                <AiOutlineStar className="tx-sm" /> | {movie.popularity}
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/3">
                <Typography
                  variant="body1"
                  color="text.secondary"
                  data-testid="movie-overview"
                >
                  {movie.overview}
                </Typography>
              </div>
              <div className="w-full md:w-1/3">
                <button className="bg-red-600 text-white w-full md:w-3/4 mt-0 px-5 mr-2 mb-2 text-sm hover:border-solid hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 font-light px-2 rounded-full">
                  See Showtimes
                </button>
                <button
                  className="bg-transparent mt-0 px-5 w-full md:w-3/4 mr-2 mb-2 text-sm hover:bg-red-700  border-solid border-2 border-red-600 hover:text-white text-red-600 font-light px-2 rounded-full"
                  id="watch-more"
                >
                  Watch More Movies
                </button>
              </div>
            </div>
            <div className="movie-director">
              <div>
                <p>Director: {movie.Director}</p>
                <p>Writers: {movie.Writer}</p>
                <p>Stars: {movie.Actors}</p>
              </div>
              <div className="images-div"></div>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small">Top rated movie #65</Button>
            <Button size="small">Awards 9 nominations </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default OneMovieCard;
