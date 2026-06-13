import { useState } from "react";
import "./HomePageLeadership.css";

const leadershipTeam = [
  {
    name: "Rajiv Menon",  
    role: "Chief Executive Officer",
    detail: "Leads strategy and client relationships across global engagements.",
    photo:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sarah Whitfield",
    role: "Head of US Staffing",
    detail: "Builds talent pipelines and hires the right experts for every team.",
    photo:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Daniel Park",
    role: "VP, Engineering",
    detail: "Oversees delivery, architecture, and technical excellence.",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Aisha Khan",
    role: "Director, Client Success",
    detail: "Ensures every client engagement meets outcomes with confidence.",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  },
];

const HomePageLeadership = () => {
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleHover = (index) => {
    setFocusedIndex(index);
  };

  const handleHoverEnd = () => {
    setFocusedIndex(null);
  };

  return (
    <section className="leadership-section">
      <div className="leadership-inner">
        <header className="leadership-header">
          <span className="leadership-label">Leadership</span>
          <h2 className="leadership-title">The people behind every engagement.</h2>
          <p className="leadership-description">
            A senior team with decades of combined experience across enterprise
            IT, software, and operations.
          </p>
        </header>

        <div className={`leadership-grid ${focusedIndex ? `grid-focus-${focusedIndex}` : ""}`}>
          {leadershipTeam.map((leader, index) => (
            <article
              key={leader.name}
              className={`leader-card ${focusedIndex === index + 1 ? "leader-card--focused" : focusedIndex ? "leader-card--inactive" : ""}`}
              onMouseEnter={() => handleHover(index + 1)}
              onMouseLeave={handleHoverEnd}
            >
              <div className="leader-card__surface">
                <div className="leader-card__media">
                  <div
                    className="leader-photo"
                    style={{ backgroundImage: `url(${leader.photo})` }}
                    aria-hidden="true"
                  />
                </div>
                <div className="leader-card__body">
                  <div className="leader-card__title">
                    <h3 className="leader-name">{leader.name}</h3>
                    <p className="leader-role">{leader.role}</p>
                  </div>
                  <p className="leader-card__detail">{leader.detail}</p>
                </div>
              </div>
            </article>
          ))}     
        </div>

        <div className="leadership-cta">
          <div className="leadership-cta__card">
            <div className="leadership-cta__content">
              <h3>Ready to build what’s next?</h3>
              <p>Schedule a 30-minute discovery call. No pitch — just a real conversation about your goals.</p>
              <button className="leadership-cta__button">
                Book a Call <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageLeadership;
