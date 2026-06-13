import { useEffect, useRef, useState } from "react";

const FeatureCard = ({ item, isMobile }) => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: isMobile
          ? "column"
          : item.reverse
          ? "row-reverse"
          : "row",
        gap: isMobile ? "24px" : "40px",
        background: "transparent",
        padding: isMobile ? "24px" : "36px",
        borderRadius: "22px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateX(0)"
            : item.reverse
            ? "translateX(80px)"
            : "translateX(-80px)",
          transition: "all 0.9s ease",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: "100%",
            maxWidth: isMobile ? "140px" : "220px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            color: "#0b1c39",
            marginBottom: "14px",
            fontWeight: "600",
            lineHeight: "1.2",
          }}
        >
          {item.title}
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#5b677a",
            margin: 0,
          }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
};

const HomePageWhyCubeR = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const features = [
    {
      title: "Outcome-led engagements",
      description:
        "We measure success by your business KPIs — placements made, features shipped, uptime delivered.",
      image:
        "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
      reverse: false,
    },
    {
      title: "Built-in accountability",
      description:
        "Senior delivery leads on every account. One throat to choke. No subcontracted surprises.",
      image:
        "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
      reverse: true,
    },
    {
      title: "Premium standard, every time",
      description:
        "From a single contractor to a 50-engineer build, we apply the same rigor and care.",
      image:
        "https://cdn-icons-png.flaticon.com/512/2583/2583344.png",
      reverse: false,
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(90deg, #f4e6de 0%, #f7f4ec 50%, #eef2e7 100%)",
        padding: isMobile ? "70px 5%" : "100px 6%",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: isMobile ? "50px" : "70px",
        }}
      >
        <p
          style={{
            color: "#ff5a47",
            letterSpacing: "3px",
            fontSize: "32px",
            marginBottom: "16px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Why Cube R?
        </p>

        <h1
          style={{
            fontSize: "32px",
            lineHeight: "1.2",
            color: "#0b1c39",
            fontWeight: "500",
            margin: 0,
          }}
        >
          Senior expertise.
          Structured delivery.
          <br />
          Zero handoffs.
        </h1>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {features.map((item, index) => (
          <FeatureCard
            key={index}
            item={item}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePageWhyCubeR;