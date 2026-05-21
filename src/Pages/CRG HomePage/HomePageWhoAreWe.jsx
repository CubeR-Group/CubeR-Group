import { useEffect, useState, useRef } from "react";
import "./WhoWeAre.css";

const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 1500;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target]);

  return (
    <h2 ref={ref} className="stat-number">
      {count}
      {suffix}
    </h2>
  );
};


const HomePageWhoAreWe = () => {
   const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
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
        <div className="stats">

          <div className="stat">
            <Counter target={10} suffix="+" />
            <p>Years building partnerships</p>
          </div>

          <div className="stat">
            <Counter target={500} suffix="+" />
            <p>Projects Delivered</p>
          </div>

          <div className="stat">
            <Counter target={98} suffix="%" />
            <p>Client Satisfaction</p>
          </div>

          <div className="stat">
            <Counter target={150} suffix="+" />
            <p>Expert Team Members</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomePageWhoAreWe;