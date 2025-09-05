import "./App.css";
import Enterprise from "./pages/Enterprise";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vortex from "./pages/Vortex";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <a href="/" className="home-link">
            <span className="and">AND</span> Book
          </a>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Enterprise" element={<Enterprise />} />{" "}
          <Route path="/Vortex" element={<Vortex />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
