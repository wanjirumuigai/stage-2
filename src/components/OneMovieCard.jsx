import React, { useEffect, useState } from "react";

const OneMovieCard = () => {
  const [movie, setMovies] = useState([]);

  const url = "http://localhost:3000";

  useEffect(() => {
    fetch("http://localhost:3000/films/2")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  return (
    <div className="one-movie-card">
      <div className="item-1">
        <img src={movie.Image} />
      </div>
      <div className="item-2"></div>
      <div className="item-3"></div>
      <div className="item-4"></div>
      <div className="item-5"></div>
      <div className="item-6"></div>
    </div>
  );
};

export default OneMovieCard;
