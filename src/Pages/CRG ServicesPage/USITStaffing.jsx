import "./USITStaffing.css";
import ServiceCard from "../../components/ServiceCard";

import discoveryImg from "../../assets/usit/discovery.png";
import sourcingImg from "../../assets/usit/sourcing.png";
import vettingImg from "../../assets/usit/vetting.png";
import submissionImg from "../../assets/usit/submission.png";
import onboardingImg from "../../assets/usit/onboarding.png";

const USITstaffing = () => {
  const process = [
    {
      number: "01",
      title: "Discovery",
      image: discoveryImg,
      description:
        "We free up your sales team to focus on what they do best—building relationships and closing deals.",
    },

    {
      number: "02",
      title: "Sourcing",
      image: sourcingImg,
      description:
        "Understand your customers better with AI-driven analytics that reveal purchasing patterns, preferences, and potential opportunities.",
    },

    {
      number: "03",
      title: "Vetting",
      image: vettingImg,
      description:
        "Stay ahead of the curve with predictive analytics that help you anticipate market trends and customer behaviors.",
    },

    {
      number: "04",
      title: "Submission",
      image: submissionImg,
      description:
        "Searching for all customers scattered across multiple platforms can be challenging.",
    },

    {
      number: "05",
      title: "Onboarding",
      image: onboardingImg,
      description:
        "We handle compliance, equipment, and ramp-up so you don't have to.",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="services-hero">
        <div className="services-hero-content">
          <h1>
            Elite US-based IT talent,
            <br />
            placed with surgical precision.
          </h1>

          <p>
            Contract, contract-to-hire, and direct placement — backed by a
            senior recruiting team that knows the difference between a resume
            and a fit.
          </p>

          <button className="hero-btn">
            Schedule a Hiring Strategy Call
            <span> →</span>
          </button>
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}

      <section className="who-we-serve">
        <p className="section-label">WHO WE SERVE</p>

        <h2 className="section-title">Built for Businesses That Expect More</h2>

        <p className="section-description">
          Our clients are leaders in their industries who need more than a
          vendor—they need a trusted technology partner.
        </p>

        <p className="section-description second">
          We support organizations across healthcare, finance, manufacturing,
          education, and professional services.
        </p>

        <div className="serve-grid">
          <ServiceCard
            icon="📄"
            title="Enterprise IT"
            description="Fortune 1000 teams scaling delivery without compromising quality."
          />

          <ServiceCard
            icon="🚀"
            title="Growth-stage Tech"
            description="Series B+ companies hiring experienced engineers rapidly."
          />

          <ServiceCard
            icon="🏛️"
            title="Public Sector"
            description="Federal, state, and municipal contracts requiring vetted talent."
          />
        </div>
      </section>

      {/* ================= OUR PROCESS ================= */}

      {/* Top Row */}
      <section className="staffing-process">
        <p className="section-label">OUR PROCESS</p>

        <h2 className="section-title">
          A repeatable, transparent recruiting flow.
        </h2>

        <p className="section-description">
          Our leadership team brings together decades of experience in
          technology, business strategy, and client success.
        </p>

        <div className="process-grid-top">
          {process.slice(0, 2).map((step) => (
            <div className="process-card" key={step.number}>
              <div className="process-image">
                <img src={step.image} alt={step.title} />
              </div>

              <div className="process-content">
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process-grid-bottom">
          {process.slice(2).map((step) => (
            <div className="process-card" key={step.number}>
              <div className="process-image">
                <img src={step.image} alt={step.title} />
              </div>

              <div className="process-content">
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ROLES WE PLACE ================= */}

      <section className="roles-section">
        <p className="roles-label">ROLES WE PLACE</p>

        <h2 className="roles-title">
          From senior individual contributors to engineering leadership.
        </h2>

        <div className="roles-container">
          {[
            "Senior Software Engineer",
            "Cloud Architect",
            "DevOps Engineer",
            "Site Reliability Engineer",
            "Data Engineer",
            "Machine Learning Engineer",
            "Product Manager",
            "Engineering Manager",
            "Mobile Developer (iOS/Android)",
            "Full-Stack Developer",
            "QA Automation Engineer",
            "Security Engineer",
            "Salesforce Developer",
            "SAP Consultant",
            "ServiceNow Architect",
            "Business Analyst",
            "Scrum Master",
            "UX Designer",
          ].map((role) => (
            <span key={role} className="role-pill">
              {role}
            </span>
          ))}
        </div>
      </section>
      {/* ================= FINAL CTA ================= */}

<section className="staffing-final-cta">
  <div className="staffing-final-card">
    <h2>Get a curated shortlist in 5 days.</h2>

    <p>
      Tell us about the role. We'll come back with vetted candidates that
      actually fit.
    </p>

    <button className="staffing-final-btn">
      Book a Call
      <span>→</span>
    </button>
  </div>
</section>
    </>
  );
};

export default USITstaffing;
