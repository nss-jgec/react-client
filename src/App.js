import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Events from "./views/Events";
import Team from "./views/Team";
import Gallery from "./views/Gallery";
import NavBar from "./comps/Navbar";
import Foot from "./comps/Footer";
import Advisory from "./views/Advisory";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="advisory-committee" element={<Advisory />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Foot />
      </HashRouter>
    </div>
  );
}

export default App;
