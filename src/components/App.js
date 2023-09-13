import Featured from "./Featured";
import Home from "./Home";
import "./App.css";
import Sidebar from "./Sidebar";
import OneMovieContainer from "./OneMovieContainer";
import OneMovieCard from "./OneMovieCard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <OneMovieContainer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<OneMovieCard />} />
      </Routes>
    </div>
  );
}

export default App;
