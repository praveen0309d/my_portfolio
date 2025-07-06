// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SpaceBackground from "./components/SpaceBackground";

// Import your pages
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import TechHighlights from "./pages/TechHighlights";
import Contact from "./pages/Contact";

import "./App.css"; // Global styles if needed

function App() {
  return (
    
    <>
    <SpaceBackground />
       <Router>
       {/* this should be here */}
      <NavBar />
      <div className="app-container">
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/tech-highlights" element={<TechHighlights />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
