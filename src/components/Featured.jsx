import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import { useEffect, useState } from "react";
import Loading from "./Loading";

import { PlayArrowRounded } from "@mui/icons-material";
import "./App.css";

export default function Featured() {
  const [featured, setFeatured] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/615656?api_key=d7bd4c29e3d9fc1a071c5d5a7cd4403b"
    )
      .then((res) => res.json())
      .then((data) => {
        setFeatured(data);
        console.log(data);
      });
  }, []);

  if (!featured) {
    <Loading />;
  }
  return (
    <div className="featured">
      <img
        src={`https://image.tmdb.org/t/p/w500/${featured?.poster_path}`}
        alt={featured.original_title}
        className=""
      />
      <div className="bottom-left">
        <div className="info">
          <h1>{featured.original_title}</h1>
          <span className="desc">{featured.overview}</span>
          <div className="buttons">
            <button className="play">
              <PlayCircleFilledWhiteOutlinedIcon />
              <span>Watch Trailer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
