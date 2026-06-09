import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-box">
            <span className="cube">CUBE</span>
            <span className="r">R</span>
          </div>
          <p className="tagline">Build | Scale | Lead</p>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" onClick={() => setMenuOpen(false)}>
              Services <span className="dropdown">⌄</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/careers" onClick={() => setMenuOpen(false)}>
              Careers
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="nav-cta">
          <button className="call-btn">
            Book a Call <span className="arrow">→</span>
          </button>
        </div>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;