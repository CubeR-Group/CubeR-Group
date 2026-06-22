const styles = `
.hero-section{
  text-align:center;
  padding:90px 20px 80px;
}

.hero-container{
  max-width:900px;
  margin:auto;
}

.top-hero-title{
  font-size:56px;
  font-weight:600;
  color:#EF4E3C;
  line-height:1.1;
  margin-bottom:20px;
}

.hero-subtitle{
  max-width:740px;
  margin:auto;
  color:#6b7280;
  font-weight:400;
  font-size:20px;
  line-height:1.8;
}

.hero-btn{
  margin-top:30px;
  background:#ef5b4c;
  color:white;
  border:none;
  border-radius:8px;
  padding:12px 24px;
  cursor:pointer;
  font-weight:600;
}

.hero-btn:hover{
  background:#e74c3c;
}
`;

export default function CareerHero() {
  return (
    <>
      <style>{styles}</style>

      <section className="hero-section">
        <div className="hero-container">
          <h1 className="top-hero-title">
            Build Your Career With Us
          </h1>

          <p className="hero-subtitle">
            Join a team of passionate technologists,
            innovators, and problem-solvers who are
            shaping the future of enterprise technology.
          </p>

          <button
            className="hero-btn"
            onClick={() =>
              document.getElementById("open-roles")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            View Open Positions →
          </button>
        </div>
      </section>
    </>
  );
}