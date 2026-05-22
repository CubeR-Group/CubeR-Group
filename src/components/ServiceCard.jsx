const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      style={{
        background: "#f8f8f8",
        borderRadius: "28px",
        padding: "42px",
        minHeight: "340px",
        transition: "all 0.35s ease",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.background =
          "linear-gradient(135deg, #fff6f2 0%, #f8fff6 100%)";
        e.currentTarget.style.boxShadow =
          "0 20px 40px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.background = "#f8f8f8";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "58px",
          height: "58px",
          background: "#fdebe6",
          borderRadius: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "32px",
          fontSize: "24px",
          color: "#f05b43",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h2
        style={{
          fontSize: "clamp(28px, 2vw, 42px)",
          color: "#0f172a",
          marginBottom: "18px",
          lineHeight: "1.2",
          fontWeight: "600",
        }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        style={{
          color: "#5b6778",
          lineHeight: "1.8",
          fontSize: "clamp(16px, 1.1vw, 20px)",
          marginBottom: "38px",
        }}
      >
        {description}
      </p>

      {/* Learn More */}
      <div
        style={{
          color: "#f05b43",
          fontWeight: "600",
          display: "flex",
          gap: "8px",
          alignItems: "center",
          fontSize: "18px",
        }}
      >
        <span>Learn more</span>
        <span>↗</span>
      </div>
    </div>
  );
};

export default ServiceCard;