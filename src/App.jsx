import Movie from "./Components/movie/Movie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Celebirity from "./Components/pages/Celebirity"
import Home from "./Components/pages/Home"
import TV from "./Components/pages/TV"
import Ad from "./Components/Ad";


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
        </Routes>
        <Ad />
      </BrowserRouter>
    </div>
  );
}

export default App;
