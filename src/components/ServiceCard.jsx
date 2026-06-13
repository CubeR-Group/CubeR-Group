const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      style={{
        background: "#f8f8f8",
        borderRadius: "24px",
        padding: "28px",
        minHeight: "240px",
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
      <div
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
        }}
      >
        {icon}
      </div>

      <h2
        style={{
          fontSize: "20px",
          color: "#0f172a",
          marginBottom: "12px",
          lineHeight: "1.3",
          fontWeight: "600",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#5b6778",
          lineHeight: "1.8",
          fontSize: "15px",
          marginBottom: "30px",
          maxWidth: "280px",
        }}
      >
        {description}
      </p>

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