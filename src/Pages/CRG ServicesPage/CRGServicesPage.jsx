import "./CRGServicesPage.css";
import ServiceCard from "../../components/ServiceCard";

const CRGServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>
            Elite US-based IT talent, placed with
            <br />
            surgical precision.
          </h1>

          <p>
            Contract, contract-to-hire, and direct placement — backed by a
            senior recruiting team that knows the difference between a résumé
            and a fit.
          </p>

          <button className="hero-btn">
            Schedule a Hiring Strategy Call
            <span> →</span>
          </button>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="who-we-serve">
        <p className="section-label">WHO WE SERVE</p>

        <h2 className="section-title">
          Built for Businesses That Expect More
        </h2>

        <p className="section-description">
          Our clients are leaders in their industries who need more than a
          vendor—they need a trusted technology partner.
        </p>

        <p className="section-description second">
          We support organizations across healthcare, finance, manufacturing,
          education, and professional services with staffing, software
          development, and collaboration solutions tailored to their goals.
        </p>

        <div className="serve-grid">
          <ServiceCard
            icon="📄"
            title="Enterprise IT"
            description="Fortune 1000 teams scaling delivery without compromising quality bar."
          />

          <ServiceCard
            icon="🚀"
            title="Growth-stage Tech"
            description="Series B+ companies needing senior engineers fast, with no-handoff handovers."
          />

          <ServiceCard
            icon="🏛️"
            title="Public Sector"
            description="Federal, state and municipal contracts requiring vetted, US-cleared talent."
          />
        </div>
      </section>
    </>
  );
};

export default CRGServicesPage;