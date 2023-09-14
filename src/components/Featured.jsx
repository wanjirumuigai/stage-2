import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

import { PlayArrowRounded } from "@mui/icons-material";
import "./App.css";
import Navbar from "./Navbar";
import { Link } from "@mui/material";
import imdb from "../images/imbd.png";
import tomato from "../images/tomato.png";

export default function Featured() {
  const [featured, setFeatured] = useState([]);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/615656?api_key=d7bd4c29e3d9fc1a071c5d5a7cd4403b"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network error");
        }
        return res.json();
      })
      .then((data) => {
        setFeatured(data);
        setLoading(true);
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
  return (
    <>
      <div className="header">
        <Navbar />
        <div className="text-box">
          <h1>
            John Wich 3: <br />
            Parabellum
          </h1>
          <div className="ratings">
            <span>
              <img src={imdb} alt="" />
              <small>86.0/100</small>
            </span>
            <span>
              <img src={tomato} alt="" />
              <small>97%</small>
            </span>
          </div>
          <p>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <Link to="" style={{ width: "200px" }}>
            <PlayArrowRounded />
            <span>WATCH TRAILER</span>
          </Link>
        </div>
      </div>
    </>
  );
}
