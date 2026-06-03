const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      style={{
        background: "#f8f8f8",
        borderRadius: "24px",
        padding: "32px",
        minHeight: "260px",
        transition: "all 0.35s ease",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.background =
          "linear-gradient(135deg, #fff6f2 0%, #f8fff6 100%)";
        e.currentTarget.style.boxShadow =
          "0 15px 30px rgba(0,0,0,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = "#f8f8f8";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "52px",
          height: "52px",
          background: "#fdebe6",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
          fontSize: "22px",
          color: "#f05b43",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h2
        style={{
          fontSize: "clamp(22px, 2vw, 28px)",
          color: "#0f172a",
          marginBottom: "14px",
          lineHeight: "1.25",
          fontWeight: "600",
        }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        style={{
          color: "#5b6778",
          lineHeight: "1.7",
          fontSize: "15px",
          marginBottom: "28px",
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
          gap: "6px",
          alignItems: "center",
          fontSize: "14px",
        }}
      >
        <span>Learn more</span>
        <span>↗</span>
      </div>
    </div>
  );
};

export default ServiceCard;