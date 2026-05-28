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
            fontSize: "clamp(14px, 2vw, 18px)",
            fontWeight: "500",
          }}
        >
          Our Services
        </p>

        <h1
          style={{
            fontSize: "clamp(34px, 7vw, 74px)",
            color: "#0f172a",
            marginBottom: "22px",
            fontWeight: "500",
            lineHeight: "1.1",
            letterSpacing: "-2px",
          }}
        >
          AI-grade solutions that take your business further.
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2vw, 24px)",
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
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

      {/* 🔥 PARTNERS SECTION (replaced stats) */}
      <div
        ref={statsRef}
        style={{
          marginTop: "70px",
          maxWidth: "1050px",
          marginInline: "auto",
          borderRadius: "28px",
          padding: "40px 28px",
          background:
            "linear-gradient(90deg, #f8f8f8 0%, #f8f8f8 70%, #fdebe6 100%)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "32px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            gridColumn: "1 / -1",
            fontSize: "20px",
            color: "#0f172a",
            marginBottom: "10px",
            fontWeight: "500",
          }}
        >
          Our Partners
        </h3>

       <img src={atlassian} alt="Atlassian" style={logoStyle} />
<img src={slack} alt="Slack" style={logoStyle} />
<img src={dropbox} alt="Dropbox" style={logoStyle} />
<img src={shopify} alt="Shopify" style={logoStyle} />
<img src={google} alt="Google" style={logoStyle} />
      </div>
    </section>
  );
};

const logoStyle = {
  maxHeight: "40px",
  objectFit: "contain",
  opacity: 0.7,
};

export default HomePageOurServices;