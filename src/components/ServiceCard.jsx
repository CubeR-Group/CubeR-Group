const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: "28px",
        minHeight: "240px",
        transition: "all 0.35s ease",
        textAlign: "left",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        backgroundClip: "padding-box",
        border: "1px solid transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.borderColor = "#EF4E3C";

        e.currentTarget.style.background =
          "radial-gradient(circle at top right, rgba(240,91,67,0.05) 0%, rgba(240,91,67,0.02) 12%, #FFFFFF 45%)";

        e.currentTarget.style.boxShadow =
          "0 10px 24px rgba(15,23,42,0.06), 0 2px 8px rgba(239,78,60,0.08)";

        const iconBox = e.currentTarget.querySelector(".service-icon");

        if (iconBox) {
          iconBox.style.boxShadow = iconBox.style.boxShadow =
            "0 4px 16px rgba(239,78,60,0.18), inset 0 0 0 1px #EF4E3C";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = "#FFFFFF";
        e.currentTarget.style.borderColor = "transparent";
        e.currentTarget.style.boxShadow = "none";

        const iconBox = e.currentTarget.querySelector(".service-icon");

        if (iconBox) {
          iconBox.style.boxShadow = "0 2px 8px rgba(239,78,60,0.12)";
        }
      }}
    >
      {/* Icon */}
      <div
        className="service-icon"
        style={{
          width: "48px",
          height: "48px",
          background: "#FFFFFF",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "14px",
          fontSize: "18px",
          color: "#EF4E3C",
          boxShadow: "0 2px 8px rgba(240,91,67,0.12)",
          transition: "all 0.35s ease",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h2
        style={{
          fontSize: "20px",
          color: "#132436",
          marginBottom: "12px",
          lineHeight: "28px",
          fontFamily: "Manrope",
          fontWeight: "700",
        }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        style={{
          color: "#47596B",
          lineHeight: "26px",
          fontSize: "16px",
          marginBottom: "30px",
          maxWidth: "280px",
          fontFamily: "InterRegular",
        }}
      >
        {description}
      </p>

      {/* Learn More */}
      <div
        style={{
          color: "#EF4E3C",
          fontFamily: "InterSemiBold",
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