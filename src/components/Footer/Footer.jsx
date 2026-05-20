import "./Footer.css";

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
            <div className="icon-circle">in</div>
            <div className="icon-circle">tw</div>
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