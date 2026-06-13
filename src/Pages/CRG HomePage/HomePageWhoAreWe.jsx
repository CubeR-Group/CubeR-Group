import { useEffect, useState, useRef } from "react";
import "./WhoWeAre.css";

const Counter = ({ target, suffix = "", start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <h2 className="stat-number">
      {count}
      {suffix}
    </h2>
  );
};

const HomePageWhoAreWe = () => {
  const [show, setShow] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="who">
      <div className="who-container">
        
        <p className={`who-tag ${show ? "fade-in" : ""}`}>
          WHO WE ARE?
        </p>

        <h2 className={`who-title ${show ? "fade-in delay" : ""}`}>
          Your Trusted Technology Partner
        </h2>

        <p className={`who-desc ${show ? "fade-in delay2" : ""}`}>
          At Cube R Group, we combine technical excellence with strategic insight
          to deliver solutions that transform businesses. Our team of experts
          brings together decades of experience in IT staffing, software
          development, and enterprise communications.
        </p>

        <div className="stats" ref={statsRef}>

          <div className="stat">
            <Counter target={10} suffix="+" start={startCount} />
            <p>Years building partnerships</p>
          </div>

          <div className="stat">
            <Counter target={500} suffix="+" start={startCount} />
            <p>Projects Delivered</p>
          </div>

          <div className="stat">
            <Counter target={98} suffix="%" start={startCount} />
            <p>Client Satisfaction</p>
          </div>

          <div className="stat">
            <Counter target={150} suffix="+" start={startCount} />
            <p>Expert Team Members</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomePageWhoAreWe;