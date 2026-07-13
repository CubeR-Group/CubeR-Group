import "./AboutLeadership.css";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

// const team = [
//   {
//     name: "Rajiv Menon",
//     role: "Chief Executive Officer",
//     image: "/images/leader1.jpg",
//   },
//   {
//     name: "Sarah Whitfield",
//     role: "Head of US Staffing",
//     image: "/images/leader2.jpg",
//   },
//   {
//     name: "Daniel Park",
//     role: "VP, Engineering",
//     image: "/images/leader3.jpg",
//   },
//   {
//     name: "Aisha Khan",
//     role: "Director, Client Success",
//     image: "/images/leader4.jpg",
//   },
// ];

const AboutLeadership = () => {
  const sliderRef = useRef();
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const amount = 320;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleBookCall = () => {
    navigate("/contact", {
      state: {
        scrollToBookCall: true,
      },
    });
  };

  return (
    <section className="leadership">
      <div className="leadership-container">
        {/* <span className="leadership-tag">LEADERSHIP</span>

        <h2 className="leadership-title">
          Meet the Team Behind Our Success
        </h2>

        <p className="leadership-subtitle">
          Our leadership team brings together decades of experience in
          technology, business strategy, and client success.
        </p>

        <div className="mobile-arrows">
          <button onClick={() => scroll("left")}>
            <ChevronLeft />
          </button>

          <button onClick={() => scroll("right")}>
            <ChevronRight />
          </button>
        </div>

        <div className="leadership-cards" ref={sliderRef}>
          {team.map((member, index) => (
            <div className="leader-card" key={index}>
              <img src={member.image} alt={member.name} />

              <div className="leader-content">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div> */}

        <div className="leadership-cta">
          <h2>Ready to build what's next?</h2>

          <p>
            Schedule a 30-minute discovery call. No pitch — just a real
            conversation about your goals.
          </p>

          <button onClick={handleBookCall}>
            Book a Call
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;