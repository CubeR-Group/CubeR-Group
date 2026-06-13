import ServiceCard from "../../components/ServiceCard";
import { useRef } from "react";

import atlassian from "../../assets/Our_Partners_logo/atlassian.png";
import slack from "../../assets/Our_Partners_logo/slack.png";
import dropbox from "../../assets/Our_Partners_logo/dropbox.png";
import shopify from "../../assets/Our_Partners_logo/shopify.png";
import google from "../../assets/Our_Partners_logo/google.png";

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
          We design, build, and deliver technology that helps you work smarter
          — not harder.
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
    marginTop: "60px",
    maxWidth: "1100px",
    marginInline: "auto",
    borderRadius: "24px",
    padding: "36px 40px",
    background:
      "linear-gradient(90deg, #f8f8f8 0%, #f8f8f8 70%, #fdebe6 100%)",
  }}
>
  <h3
    style={{
      textAlign: "center",
      fontSize: "clamp(16px, 2vw, 22px)",
      color: "#0f172a",
      marginBottom: "32px",
      fontWeight: "500",
    }}
  >
    Our Partners
  </h3>

  <div
    style={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      gap: "32px",
    }}
  >
    <div style={logoContainerStyle}>
      <img src={atlassian} alt="Atlassian" style={logoStyle} />
    </div>

    <div style={logoContainerStyle}>
      <img src={slack} alt="Slack" style={logoStyle} />
    </div>

    <div style={logoContainerStyle}>
      <img src={dropbox} alt="Dropbox" style={logoStyle} />
    </div>

    <div style={logoContainerStyle}>
      <img src={shopify} alt="Shopify" style={logoStyle} />
    </div>

    <div style={logoContainerStyle}>
      <img src={google} alt="Google" style={logoStyle} />
    </div>
  </div>
</div>
    </section>
  );
};

const logoContainerStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const logoStyle = {
  height: "42px",
  maxWidth: "160px",
  width: "100%",
  objectFit: "contain",
  opacity: 0.75,
  transition: "all 0.3s ease",
};

export default HomePageOurServices;