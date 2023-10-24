import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";

function App() {
  return (
    <Routes>
      <Route path="" element={<Navigate to="home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/flight-log" element={<About />} />
      <Route path="/sector-log" element={<Blog />} />
      <Route path="*" element={<Navigate to="home" />} />
    </Routes>
  );
}

export default App;
