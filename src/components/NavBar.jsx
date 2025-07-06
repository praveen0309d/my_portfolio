import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUser, FaGraduationCap, FaTools, FaBriefcase,
  FaImages, FaMicrochip, FaEnvelope, FaBars, FaTimes
} from "react-icons/fa";
import './NavBar.css';

function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About Me", path: "/", icon: <FaUser /> },
    { name: "Education", path: "/education", icon: <FaGraduationCap /> },
    { name: "Skills", path: "/skills", icon: <FaTools /> },
    { name: "Experience", path: "/experience", icon: <FaBriefcase /> },
    { name: "Portfolio", path: "/portfolio", icon: <FaImages /> },
    { name: "Tech Highlights", path: "/tech-highlights", icon: <FaMicrochip /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">My portfolio</div>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={`navbar-link ${location.pathname === link.path ? "active" : ""}`}
            >
              <span className="nav-icon">{link.icon}</span>
              <span className="nav-text">{link.name}</span>
            </Link>
          ))}
          {/* <Link to="/contact" className="navbar-button" onClick={closeMenu}>
            Let's Talk
          </Link> */}
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
