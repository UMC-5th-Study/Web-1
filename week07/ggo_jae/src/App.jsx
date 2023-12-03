import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Celebirity from "./Components/pages/Celebirity";
import Home from "./Components/pages/Home";
import TV from "./Components/pages/TV";
import Ad from "./Components/Ad";
import MovieIndex from "./Components/pages/MovieIndex";
import Movie from "./Components/movie/Movie";
import NotFound from "./Components/pages/NotFound";
import Login from "./Components/login/login"
import Weather from "./Components/pages/Weather";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/Movie" element={<Movie />} />
          <Route path="/Celebirity" element={<Celebirity />} />
          {/* useParams 훅으로 가져온 title 변수를 동적으로 사용하려면 :title과 같은 형식으로
          작성해줘야됨!!!!! */}
          <Route path="/movie/:title" element={<MovieIndex />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Weather" element={<Weather />} />
        </Routes>
        <Ad />
      </BrowserRouter>
    </div>
  );
}

export default App;
