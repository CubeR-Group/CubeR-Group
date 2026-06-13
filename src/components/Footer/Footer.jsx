import "./Footer.css";
import { LuTwitter } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import logo from "../../assets/NAV_LOGO/CUBER_LOGO.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-col logo-col">
            <div className="nav-logo">
                      <div className="logo-box">
                        <img src={logo} alt="CubeR Logo" className="logo-img" />
                      </div>
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
          <LuLinkedin />
          </a>
            
          <a
           href="https://twitter.com/YOUR_PROFILE"
           target="_blank"
           rel="noopener noreferrer"
           className="icon-circle"
          >
          <LuTwitter />
          </a>


        </div>
        </div>
        <div className="footer-col">
          <p className="footer-link">About</p>
          <p className="footer-link">Careers</p>
          <p className="footer-link">Contact</p>
        </div>
        <div className="footer-col">
          <p className="footer-link">US IT Staffing</p>
          <p className="footer-link">Software Development</p>
          <p className="footer-link">Video Conferencing</p>
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