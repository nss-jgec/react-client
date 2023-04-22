import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Feed from "./views/Feed";
import Team from "./views/Team";
import NavBar from "./comps/Navbar";
import Foot from "./comps/Footer";
import Advisory from "./views/Advisory";
import Contact from "./views/Contact";
import Activities from "./views/Activities";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/feed" element={<Feed />} />
          <Route path="/activity" element={<Activities />} />
          <Route path="/team" element={<Team />} />
          <Route path="advisory-committee" element={<Advisory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Foot />
      </HashRouter>
    </div>
  );
}

export default App;
