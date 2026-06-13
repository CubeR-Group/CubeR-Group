const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: "28px",
        minHeight: "240px",
        transition: "all 0.35s ease",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        backgroundClip: "padding-box",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";

        e.currentTarget.style.background =
          "radial-gradient(circle at top right, rgba(240,91,67,0.05) 0%, rgba(240,91,67,0.02) 12%, #FFFFFF 45%)";

        e.currentTarget.style.boxShadow =
          "0 15px 30px rgba(0,0,0,0.06), inset 0 0 0 2px rgba(247,128,115,0.55)";

        const iconBox = e.currentTarget.querySelector(".service-icon");

        if (iconBox) {
          iconBox.style.boxShadow =
            "0 4px 16px rgba(240,91,67,0.18), inset 0 0 0 2px rgba(247,128,115,0.55)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = "#FFFFFF";
        e.currentTarget.style.boxShadow = "none";

        const iconBox = e.currentTarget.querySelector(".service-icon");

        if (iconBox) {
          iconBox.style.boxShadow =
            "0 2px 8px rgba(240,91,67,0.12)";
        }
      }}
    >
      {/* Icon */}
      <div
        className="service-icon"
        style={{
          width: "44px",
          height: "44px",
          background: "#fdebe6",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
          fontSize: "18px",
          color: "#f05b43",
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
          color: "#0f172a",
          marginBottom: "12px",
          lineHeight: "1.3",
          fontFamily: "ManropeBold",
        }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        style={{
          color: "#5b6778",
          lineHeight: "1.8",
          fontSize: "15px",
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