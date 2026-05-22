import ServiceCard from "../../components/ServiceCard";

const HomePageOurServices = () => {
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
        padding: "90px 24px",
        background:
          "linear-gradient(90deg, #f4e6de 0%, #f7f4ec 50%, #eef2e7 100%)",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "1000px",
          margin: "0 auto 60px",
        }}
      >
        {/* Small Heading */}
        <p
          style={{
            color: "#f05b43",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "18px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Our Services
        </p>

        {/* Main Title */}
        <h1
          style={{
            fontSize: "clamp(42px, 6vw, 74px)",
            color: "#0f172a",
            marginBottom: "24px",
            fontWeight: "500",
            lineHeight: "1.1",
            letterSpacing: "-2px",
          }}
        >
          AI-grade solutions that take your business further.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 24px)",
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

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px",
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

      {/* Stats Section */}
      <div
        style={{
        marginTop: "70px",
        maxWidth: "1050px",
        marginInline: "auto",
        borderRadius: "28px",
        padding: "40px 32px",
        background:
        "linear-gradient(90deg, #f8f8f8 0%, #f8f8f8 70%, #fdebe6 100%)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "30px",
        alignItems: "center",
        }}
      >
        {/* Stat 1 */}
        <div>
          <h2
            style={{
            fontSize: "clamp(38px, 4vw, 64px)",
            color: "#ee8679",
            marginBottom: "8px",
            fontWeight: "700",
            lineHeight: "1",
            }}
          >
            500+
          </h2>

          <p
            style={{
              color: "#5b6778",
              fontSize: "17px",
            }}
          >
            Placements completed
          </p>
        </div>

        {/* Stat 2 */}
        <div>
          <h2
            style={{
            fontSize: "clamp(38px, 4vw, 64px)",
            color: "#ee8679",
            marginBottom: "8px",
            fontWeight: "700",
            lineHeight: "1",
            }}
          >
            120+
          </h2>

          <p
            style={{
              color: "#5b6778",
              fontSize: "17px",
            }}
          >
            Enterprise clients
          </p>
        </div>

        {/* Stat 3 */}
        <div>
          <h2
            style={{
              fontSize: "clamp(38px, 4vw, 64px)",
              color: "#ee8679",
              marginBottom: "8px",
              fontWeight: "700",
              lineHeight: "1",
            }}
          >
            300+
          </h2>

          <p
            style={{
              color: "#5b6778",
              fontSize: "17px",
            }}
          >
            Projects delivered
          </p>
        </div>

        {/* Stat 4 */}
        <div>
          <h2
            style={{
              fontSize: "clamp(38px, 4vw, 64px)",
              color: "#ee8679",
              marginBottom: "8px",
              fontWeight: "700",
              lineHeight: "1",
            }}
          >
            10+
          </h2>

          <p
            style={{
              color: "#5b6778",
              fontSize: "17px",
            }}
          >
            Years of expertise
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePageOurServices;