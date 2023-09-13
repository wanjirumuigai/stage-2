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
import { BsDot } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const OneMovieCard = () => {
  const [movie, setMovies] = useState([]);
  const [genres, setGenre] = useState([]);
  const navigate = useNavigate();

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
      })
      .catch((error) => {
        // Redirect to the error page with the error message
        navigate(`/error/${error.message}`);
      });
  }, [navigate]);

  return (
    <>
      <Sidebar />
      <div className="one-movie-card">
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
            <div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="movie-details"
              >
                <h5 data-testid="movie-title">{movie.original_title} </h5>
                <BsDot />
                <h5 data-testid="movie-release-date">
                  {date.getUTCFullYear()}
                </h5>
                <BsDot />
                <h5 data-testid="movie-runtime">{movie.runtime}</h5>
                {movie.rated} <BsDot />
                {genres.map((item) => {
                  return <button key={item.id}>{item.name}</button>;
                })}
              </Typography>

              <Typography>
                <AiOutlineStar /> | 350k
              </Typography>
            </div>
            <div className="one-movie-buttons">
              <Typography
                variant="body1"
                color="text.secondary"
                data-testid="movie-overview"
              >
                {movie.overview}
              </Typography>
              <div>
                <button>See Showtimes</button>
                <button id="watch-more">Watch More Movies</button>
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
