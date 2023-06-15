import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Team from "./components/Team";
import Tools from "./components/Tools";
import Support from "./components/Support";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team/" element={<Team />} />
          <Route path="/tools/" element={<Tools />} />
          <Route path="/support/" element={<Support />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
