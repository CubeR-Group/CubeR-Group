import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/NAV_LOGO/CUBER_LOGO.svg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // 🔥 NEW

  return (
    <div className="nav-wrapper">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <div className="logo-box">
            <img src={logo} alt="CubeR Logo" className="logo-img" />
          </div>
        </div>

        {/* Nav Links */}
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

          {/* 🔥 SERVICES DROPDOWN */}
          <li className="services-menu">

            <div
              className="services-label"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <span className="dropdown">▾</span>
            </div>

            {servicesOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    to="/us-it-staffing"
                    onClick={() => setServicesOpen(false)}
                  >
                    US IT Staffing
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/software-development"
                    onClick={() => setServicesOpen(false)}
                  >
                    Software Development
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/video-conferencing"
                    onClick={() => setServicesOpen(false)}
                  >
                    Video Conferencing
                  </NavLink>
                </li>
              </ul>
            )}
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

        {/* CTA */}
        <div className="nav-cta">
          <button className="call-btn">
            Book a Call <span className="arrow">→</span>
          </button>
        </div>

        {/* Hamburger */}
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