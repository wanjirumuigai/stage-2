import { StarBorder } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {BsDot} from 'react-icons/bs'
import {AiOutlineStar} from "react-icons/ai"

const OneMovieCard = () => {
  const [movie, setMovies] = useState([]);
  const [genre, setGenre] = useState([])

  const url = "http://localhost:3000";

  useEffect(() => {
    fetch("http://localhost:3000/films/2")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setGenre(data.Genre.split(','))
      });
  }, []);
  

 
  return (
    <div className="one-movie-card">
      {/* <div className="item-1">
        <img src={movie.Image} />
      </div>
      <div className="item-2"></div>
      <div className="item-3"></div>
      <div className="item-4"></div>
      <div className="item-5"></div>
      <div className="item-6"></div> */}
      <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        
        image={movie.Image}
      />
      
    </Card>
    <Card sx={{ maxWidth: 1000 }}>
    <CardContent >
      <div >
        
        <Typography gutterBottom variant="h5" component="div" className="movie-details">
        {movie.Title} <BsDot /> {movie.Year} <BsDot /> {movie.Rated} <BsDot /> {movie.Runtime} 
        {genre.map((item) => {
          return (
            <button key={item}>{item}</button>
          )
        })}

        
        </Typography>
       
        <Typography>
        <AiOutlineStar /> | 350k
        </Typography>
      
        </div> 
        <div className="one-movie-buttons">
        <Typography variant="body1" color="text.secondary">
          
        {movie.Plot}
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
        <div className="images-div">
          
        </div>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Top rated movie #65</Button>
        <Button size="small">Awards 9 nominations </Button>
      </CardActions>
      </Card>
    </div>
  );
};

export default OneMovieCard;
