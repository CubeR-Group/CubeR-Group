import ServiceCard from "../../components/ServiceCard";
import { useRef } from "react";

import buildHive from "../../assets/Our_Partners_logo/BuildHive_2.png";
import corpus from "../../assets/Our_Partners_logo/Corpus_Logo_page-0001.jpg";
import lipi from "../../assets/Our_Partners_logo/LIPI Logo.jpg";
import logo from "../../assets/Our_Partners_logo/LOGO.jpg";
import manuh from "../../assets/Our_Partners_logo/Manuh Technologies Logo.png";
import stark from "../../assets/Our_Partners_logo/STARK Holdings logo.png";
import tequarian from "../../assets/Our_Partners_logo/Tequarian Logo.png";
import tmm from "../../assets/Our_Partners_logo/TMM logo 1-DKrSBkyD.png";
import yahoom from "../../assets/Our_Partners_logo/YAHOOM Logo.png";

const HomePageOurServices = () => {
  const statsRef = useRef(null);

  const services = [
    {
      icon: "👥",
      title: "US IT Staffing",
      description:
        "Source, vet, and place elite IT talent across contract, contract-to-hire, and direct placement.",
    },
    {
      icon: "</>",
      title: "Software Development",
      description:
        "Custom web and mobile applications engineered for performance, scale, and long-term maintainability.",
    },
    {
      icon: "🎥",
      title: "Video Conferencing Solutions",
      description:
        "Enterprise-grade communication platforms with rock-solid reliability and global reach.",
    },
  ];
  const partners = [
    { src: buildHive, alt: "BuildHive" },
    { src: corpus, alt: "Corpus" },
    { src: lipi, alt: "LIPI" },
    { src: logo, alt: "Logo" },
    { src: manuh, alt: "Manuh Technologies" },
    { src: stark, alt: "STARK Holdings" },
    { src: tequarian, alt: "Tequarian" },
    { src: tmm, alt: "TMM" },
    { src: yahoom, alt: "YAHOOM" },
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        background:
          "linear-gradient(90deg, #f4e6de 0%, #f7f4ec 50%, #eef2e7 100%)",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "1000px",
          margin: "0 auto 55px",
        }}
      >
        <p
          style={{
            color: "#f05b43",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "16px",
            fontSize: "clamp(24px, 5vw, 32px)",
            fontWeight: "500",
          }}
        >
          Our Services
        </p>

        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: "500",
            lineHeight: "1.2",
            letterSpacing: "-2px",
          }}
        >
          AI-grade solutions that take your business further.
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#5b6778",
            lineHeight: "1.7",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          We design, build, and deliver technology that helps you work smarter —
          not harder.
        </p>
      </div>

      {/* Services Grid */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "22px",
          alignItems: "stretch",
        }}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      {/* Partners Section */}
      <div
        ref={statsRef}
        style={{
          marginTop: "80px",
          maxWidth: "1280px",
          marginInline: "auto",
          borderRadius: "24px",
          padding: "60px 70px",
          background:
            "linear-gradient(90deg, #f8f8f8 20%, #f8f8f8 100%, #fdebe6 100%)",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 4vw, 40px)",
            color: "#0f172a",
            marginBottom: "32px",
            fontWeight: "500",
          }}
        >
          Our Partners
        </h3>

        <div
          style={{
            overflow: "hidden",
            width: "100%",
          }}
        >
          <style>
            {`
    @keyframes scrollPartners {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    .partner-scroll {
      animation: scrollPartners 25s linear infinite;
    }

    .partner-scroll:hover {
      animation-play-state: paused;
    }
  `}
          </style>
          <div
            className="partner-scroll"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              width: "max-content",
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} style={logoContainerStyle}>
                <img src={partner.src} alt={partner.alt} style={logoStyle} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const logoContainerStyle = {
  flex: "0 0 180px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const logoStyle = {
  width: "180px",
  height: "90px",
  objectFit: "contain",
  opacity: 0.9,
};

export default HomePageOurServices;
