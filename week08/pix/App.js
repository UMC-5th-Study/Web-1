
import { BrowserRouter, Route, Routes } from "react-router-dom"
import WeatherMap from "./pages/WeatherMap";

function App() {

  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeatherMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;