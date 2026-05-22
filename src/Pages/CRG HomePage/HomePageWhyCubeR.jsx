import { useEffect, useRef, useState } from "react";

const FeatureCard = ({ item, isMobile }) => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
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
        gap: "50px",
        background: "#ffffff",
        padding: isMobile ? "35px 25px" : "50px",
        borderRadius: "30px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <div
        style={{
          flex: 1,
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateX(0)"
            : item.reverse
            ? "translateX(100px)"
            : "translateX(-100px)",
          transition: "all 1s ease",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: "100%",
            maxWidth: isMobile ? "180px" : "260px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Text */}
      <div
        style={{
          flex: 1,
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#0b1c39",
            marginBottom: "20px",
            fontWeight: "500",
          }}
        >
          {item.title}
        </h2>

        <p
          style={{
            fontSize: "clamp(18px, 2vw, 24px)",
            lineHeight: "1.6",
            color: "#5b677a",
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
        background: "#f6f3ed",
        padding: "100px 6%",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <p
          style={{
            color: "#ff5a47",
            letterSpacing: "4px",
            fontSize: "18px",
            marginBottom: "20px",
            fontWeight: "600",
          }}
        >
          WHY CUBE R?
        </p>

        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: "1.2",
            color: "#0b1c39",
            fontWeight: "500",
          }}
        >
          Senior expertise. Structured delivery.
          <br />
          Zero handoffs.
        </h1>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
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