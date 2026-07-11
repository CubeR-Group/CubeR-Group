import "./VideoConferencing.css";
import { useRef } from "react";
import { BsBuilding } from "react-icons/bs";
import { MdOutlineHub } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import buildHive from "../../assets/Our_Partners_logo/8.png";
import corpus from "../../assets/Our_Partners_logo/9.png";
import pl from "../../assets/Our_Partners_logo/5.png";
import logo from "../../assets/Our_Partners_logo/11.png";
import manuh from "../../assets/Our_Partners_logo/6.png";
import stark from "../../assets/Our_Partners_logo/4.png";
import tequarian from "../../assets/Our_Partners_logo/7.png";
import tmm from "../../assets/Our_Partners_logo/10.png";
import yahoom from "../../assets/Our_Partners_logo/3.png";
import conferenceIcon from "../../assets/video-conferencing/conference-room.png";
import hybridIcon from "../../assets/video-conferencing/hybrid-workforce.png";
import managedIcon from "../../assets/video-conferencing/managed-services.png";
import { FiShield, FiWifi, FiSettings, FiVideo } from "react-icons/fi";

import { HiOutlineLightningBolt } from "react-icons/hi";
import { LuUsers } from "react-icons/lu";
function VideoConferencing() {
  const statsRef = useRef(null);
  const features = [
    {
      icon: <FiShield />,
      title: "Enterprise Security",
      description: "End-to-end encryption, SSO, SOC 2 aligned controls.",
    },
    {
      icon: <HiOutlineLightningBolt />,
      title: "99.99% Uptime",
      description: "Redundant infrastructure with global failover.",
    },
    {
      icon: <LuUsers />,
      title: "10,000+ Participants",
      description:
        "Scale from 1:1s to global all-hands without skipping a beat.",
    },
    {
      icon: <FiWifi />,
      title: "Network Optimization",
      description: "Adaptive bitrate engineered for unreliable links.",
    },
    {
      icon: <FiSettings />,
      title: "Custom Integrations",
      description: "Calendar, CRM, ticketing, and SSO — connected.",
    },
    {
      icon: <FiVideo />,
      title: "Studio-grade AV",
      description: "Certified hardware curated for every room size.",
    },
  ];
  const solutions = [
    {
      icon: conferenceIcon,
      title: "Conference Rooms",
      description:
        "Turnkey design, installation, and management for huddle spaces to executive boardrooms.",
    },
    {
      icon: hybridIcon,
      title: "Hybrid Workforce",
      description:
        "Unified platforms that connect remote and in-office teams without friction.",
    },
    {
      icon: managedIcon,
      title: "Managed Services",
      description:
        "24/7 monitoring, white-glove support, and SLA-backed uptime.",
    },
  ];
  const partners = [
    { src: buildHive, alt: "BuildHive" },
    { src: corpus, alt: "Corpus" },
    { src: pl, alt: "LIPI" },
    { src: logo, alt: "Logo" },
    { src: manuh, alt: "Manuh Technologies" },
    { src: stark, alt: "STARK Holdings" },
    { src: tequarian, alt: "Tequarian" },
    { src: tmm, alt: "TMM" },
    { src: yahoom, alt: "YAHOOM" },
  ];

  return (
    <div className="vc-page">
      {/* ================= HERO ================= */}

      <section className="vc-hero">
        <div className="vc-container">
          <p className="vc-tag">VIDEO CONFERENCING</p>

          <h1>
            Enterprise communication
            <br />
            infrastructure that just works.
          </h1>

          <p className="vc-description">
            From rapid MVPs to enterprise platforms, our senior engineering
            teams build reliable video conferencing ecosystems that scale with
            your business.
          </p>
        </div>
      </section>

      {/* ================= PARTNERS ================= */}

      <section className="vc-partners" ref={statsRef}>
        <h2 className="vc-partners-title">Our Partners</h2>

        <div className="vc-partners-slider">
          <div className="vc-partners-track">
            {[...partners, ...partners].map((partner, index) => (
              <div className="vc-logo-container" key={index}>
                <img src={partner.src} alt={partner.alt} className="vc-logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vc-solutions">
        <p className="vc-section-tag">SOLUTIONS OFFERED</p>

        <h2 className="vc-section-title">
          End-to-end communication,
          <br />
          one accountable partner.
        </h2>

        <p className="vc-section-description">
          Cube R Group was founded in 2012 by a group of senior practitioners
          who were tired of watching enterprises get handed off to junior teams
          the moment a contract was signed.
          <br />
          <br />
          Today, we operate three tightly-integrated practices — staffing,
          software, and video conferencing — under a single principle: senior
          people doing senior work, every time.
        </p>

        <div className="vc-solutions-grid">
          {solutions.map((item, index) => (
            <div className="vc-solution-card" key={index}>
              <div className="vc-icon">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="vc-icon-image"
                />
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="vc-features">
        <p className="vc-feature-tag">FEATURES & BENEFITS</p>

        <h2 className="vc-feature-title">
          Reliability you can build a business on.
        </h2>

        <p className="vc-feature-description">
          Our leadership team brings together decades of experience in
          technology, business strategy, and client success.
        </p>

        <div className="vc-feature-grid">
          {features.map((feature, index) => (
            <div className="vc-feature-card" key={index}>
              <div className="vc-feature-icon">{feature.icon}</div>

              <div>
                <h4>{feature.title}</h4>

                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="vc-cta">

  <div className="vc-cta-card">

    <h2>
      Ready to upgrade how
      <br />
      your teams meet?
    </h2>

    <p>
      Schedule a 30-minute discovery call. No pitch — just a real
      conversation about your collaboration goals and how we can help.
    </p>

    <button className="vc-cta-button">
      Book a Call
      <span>→</span>
    </button>

  </div>

</section>
    </div>
  );
}

export default VideoConferencing;
