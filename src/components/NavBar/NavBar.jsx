import { useState } from "react";
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
          <li className="active">Home</li>
          <li>About</li>
          <li>
            Services <span className="dropdown">⌄</span>
          </li>
          <li>Careers</li>
          <li>Contact</li>
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