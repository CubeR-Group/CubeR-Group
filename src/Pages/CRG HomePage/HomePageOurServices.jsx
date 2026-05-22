import ServiceCard from "../../components/ServiceCard";
import { useEffect, useState, useRef } from "react";

const useCountOnView = (target, trigger) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [trigger, target]);

  return count;
};

const HomePageOurServices = () => {
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

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
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);
  const count1 = useCountOnView(500, startCount);
  const count2 = useCountOnView(120, startCount);
  const count3 = useCountOnView(300, startCount);
  const count4 = useCountOnView(10, startCount);

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
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "32px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h2 style={statStyle}>{count1}+</h2>
          <p style={textStyle}>Placements completed</p>
        </div>

        <div>
          <h2 style={statStyle}>{count2}+</h2>
          <p style={textStyle}>Enterprise clients</p>
        </div>

    
        <div>
          <h2 style={statStyle}>{count3}+</h2>
          <p style={textStyle}>Projects delivered</p>
        </div>

       
        <div>
          <h2 style={statStyle}>{count4}+</h2>
          <p style={textStyle}>Years of expertise</p>
        </div>
      </div>
    </section>
  );
};


const statStyle = {
  fontSize: "clamp(34px, 5vw, 64px)",
  color: "#ee8679",
  marginBottom: "8px",
  fontWeight: "700",
  lineHeight: "1",
};

const textStyle = {
  color: "#5b6778",
  fontSize: "clamp(15px, 2vw, 17px)",
};

export default HomePageOurServices;