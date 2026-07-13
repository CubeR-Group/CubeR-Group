import "./SoftwareDevelopment.css";
import ServiceCard from "../../components/ServiceCard";
import {
  Globe,
  Smartphone,
  Cog,
  Cloud,
  Cpu,
  Database,
  Layers3,
  Lock,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SoftwareDevelopment = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="services-softwaredevelopment-hero">
        <div className="services-softwaredevelopment-hero-content">
          <h1>
            Web & mobile software, engineered
            <br />
            to ship and to last
          </h1>

          <p>
            From rapid MVPs to enterprise platforms, our senior engineering
            teams
            <br />
            turn ambitious ideas into production-ready software.
          </p>
        </div>
      </section>

      {/* Services Offered */}
      <section className="software-services">
        <p className="software-services-label">SERVICES OFFERED</p>

        <h2 className="software-services-title">
          Three delivery modes.
          <br />
          One quality bar.
        </h2>

        <p className="software-services-description">
          Cube R Group was founded in 2012 by a group of senior practitioners
          who were tired of watching enterprises get handed off to junior teams
          the moment a contract was signed.
        </p>

        <p className="software-services-description second">
          Today, we operate three tightly-integrated practices — staffing,
          software, and video conferencing — under a single principle: senior
          people doing senior work, every time.
        </p>

        <div className="software-services-grid">
          <ServiceCard
            icon={<Globe size={24} strokeWidth={1.8} />}
            title="Web Applications"
            description="Performant, accessible, conversion-optimized web platforms built on modern stacks."
          />

          <ServiceCard
            icon={<Smartphone size={24} strokeWidth={1.8} />}
            title="Mobile Applications"
            description="Native iOS, Android, and cross-platform apps engineered for App Store quality."
          />

          <ServiceCard
            icon={<Cog size={24} strokeWidth={1.8} />}
            title="Custom Software"
            description="Federal, state and municipal contracts requiring vetted, US-cleared talent."
          />
        </div>
      </section>
      {/* Process Section */}
      <section className="software-process">
        <p className="software-process-label">PROCESS</p>

        <h2 className="software-process-title">
          A delivery rhythm built on transparency.
        </h2>

        <p className="software-process-description">
          Our leadership team brings together decades of experience in
          technology, business strategy, and client success.
        </p>

        <div className="software-process-grid">
          <div className="software-process-card">
            <div className="software-process-header">
              <span className="software-process-number">01</span>
              <h3 className="software-process-heading">Discover</h3>
            </div>

            <p className="software-process-text">
              Workshops to align on outcomes, constraints,
              <br />
              and success metrics.
            </p>
          </div>

          <div className="software-process-card">
            <div className="software-process-header">
              <span className="software-process-number">02</span>
              <h3 className="software-process-heading">Define</h3>
            </div>

            <p className="software-process-text">
              Architecture, scope, milestones, and a shared definition of done.
            </p>
          </div>

          <div className="software-process-card">
            <div className="software-process-header">
              <span className="software-process-number">03</span>
              <h3 className="software-process-heading">Design</h3>
            </div>

            <p className="software-process-text">
              UX flows, wireframes, and a polished design
              <br />
              system.
            </p>
          </div>

          <div className="software-process-card">
            <div className="software-process-header">
              <span className="software-process-number">04</span>
              <h3 className="software-process-heading">Build</h3>
            </div>

            <p className="software-process-text">
              Iterative two-week sprints with weekly demos
              <br />
              and transparent reporting.
            </p>
          </div>

          <div className="software-process-card">
            <div className="software-process-header">
              <span className="software-process-number">05</span>
              <h3 className="software-process-heading">Launch</h3>
            </div>

            <p className="software-process-text">
              Hardened release, performance budgets, and observability from day
              one.
            </p>
          </div>

          <div className="software-process-card">
            <div className="software-process-header">
              <span className="software-process-number">06</span>
              <h3 className="software-process-heading">Evolve</h3>
            </div>

            <p className="software-process-text">
              Ongoing optimization, support, and a roadmap
              <br />
              that grows with you.
            </p>
          </div>
        </div>
      </section>
      {/* ==================================================
    TECH CAPABILITIES
================================================== */}

      <section className="software-tech">
        <p className="software-tech-label">TECH CAPABILITIES</p>

        <h2 className="software-tech-title">
          Modern stack. Battle-
          <br />
          tested choices.
        </h2>

        <div className="software-tech-grid">
          <div className="software-tech-card">
            <div className="software-tech-icon">
              <Cloud size={20} strokeWidth={1.8} />
            </div>

            <p className="software-tech-text">AWS · GCP · Azure</p>
          </div>

          <div className="software-tech-card">
            <div className="software-tech-icon">
              <Cpu size={20} strokeWidth={1.8} />
            </div>

            <p className="software-tech-text">React · Next.js · Vue</p>
          </div>

          <div className="software-tech-card">
            <div className="software-tech-icon">
              <Smartphone size={20} strokeWidth={1.8} />
            </div>

            <p className="software-tech-text">Swift · Kotlin · React Native</p>
          </div>

          <div className="software-tech-card">
            <div className="software-tech-icon">
              <Database size={20} strokeWidth={1.8} />
            </div>

            <p className="software-tech-text">Postgres · Mongo · Redis</p>
          </div>

          <div className="software-tech-card">
            <div className="software-tech-icon">
              <Layers3 size={20} strokeWidth={1.8} />
            </div>

            <p className="software-tech-text">Node · Python · Go</p>
          </div>

          <div className="software-tech-card">
            <div className="software-tech-icon">
              <Lock size={20} strokeWidth={1.8} />
            </div>

            <p className="software-tech-text">OAuth · SSO · SOC 2</p>
          </div>
        </div>
      </section>
      <section className="software-cta">
        <div className="software-cta-container">
          <h2 className="software-cta-title">
            Have a project in mind?
            <br />
            Let's scope it together.
          </h2>

          <p className="software-cta-description">
            Schedule a 30-minute discovery call. No pitch — just a real
            <br />
            conversation about your goals.
          </p>

          <button
            className="software-cta-button"
            onClick={() =>
              navigate("/contact", {
                state: {
                  scrollToBookCall: true,
                },
              })
            }
          >
            Book a Call
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </>
  );
};

export default SoftwareDevelopment;
