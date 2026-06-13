import "./Footer.css";
import { Link } from "react-router-dom";  // 🔥 added

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="footer-col logo-col">
          <div className="logo-box">
            <span className="cube">CUBE</span>
            <span className="r">R</span>
          </div>

          <p className="footer-text">
            Premium IT staffing, software engineering, and enterprise
            communication for ambitious teams.
          </p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/cubergroup"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle"
            >
              in
            </a>

            <a
              href="https://twitter.com/YOUR_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle"
            >
              tw
            </a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/careers" className="footer-link">Careers</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <Link to="/us-it-staffing" className="footer-link">US IT Staffing</Link>
          <Link to="/software-development" className="footer-link">Software Development</Link>
          <Link to="/video-conferencing" className="footer-link">Video Conferencing</Link>
        </div>

        <div className="footer-col">
          <p className="contact-item">hello@cubergroup.com</p>
          <p className="contact-item">+91-7337513399</p>
          <p className="contact-item">
            Hitec City, Hyderabad, Telangana <br />
            Dover, DE 19901, United State
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;