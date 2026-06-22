import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HomePageHero = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  const handleBookCall = () => {
    navigate("/contact", {
      state: {
        scrollToBookCall: true,
      },
    });
  };

  return (
    <section className="hero">
      <div className="hero-container">

        <h1 className={`hero-title ${show ? "fade-in" : ""}`}>
          Building Tomorrow’s <br /> Solutions Today
        </h1>

        <p className={`hero-sub ${show ? "fade-in delay" : ""}`}>
          Cube R Group delivers world-class IT staffing, software development,
          branding, marketing and video conferencing solutions that drive
          business transformation and growth.
        </p>

        <div className={`hero-buttons ${show ? "fade-in delay2" : ""}`}>
          
          <button
            className="btn primary"
            onClick={handleBookCall}
          >
            Book a Call →
          </button>

          <button className="btn secondary">
            Explore Services
          </button>

        </div>

        <p className={`hero-trust ${show ? "fade-in delay3" : ""}`}>
          TRUSTED BY 120+ ENTERPRISES
        </p>

      </div>
    </section>
  );
};

export default HomePageHero;