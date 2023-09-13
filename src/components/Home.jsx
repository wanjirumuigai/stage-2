import React, { useEffect, useState } from "react";

import Loading from "./Loading";
import { Link } from "react-router-dom";

import "./App.css";
import MovieContainer from "./MovieContainer";
import Featured from "./Featured";

const Home = () => {
  const [featured, setFeatured] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d7bd4c29e3d9fc1a071c5d5a7cd4403b"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results.slice(0, 10));
      });
  }, []);

  if (!featured) {
    <Loading />;
  }

  return (
    <div>
      <Featured />
      <MovieContainer movies={movies} setMovies={setMovies} />
    </div>
  );
};

export default Home;
