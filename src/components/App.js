import Featured from "./Featured";
import Home from "./Home";
import "./App.css";
import Sidebar from "./Sidebar";
import OneMovieContainer from "./OneMovieContainer";
import OneMovieCard from "./OneMovieCard";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <div>
      {/* <OneMovieContainer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<OneMovieCard />} />
        <Route path="/error/:message" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
