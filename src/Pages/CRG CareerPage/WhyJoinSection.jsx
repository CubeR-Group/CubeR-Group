const styles = `
.why-section{
  padding:20px 20px 120px;
}

.why-container{
  max-width:1200px;
  margin:auto;
}

.section-tag{
  text-align:center;
  color:#ef5b4c;
  text-transform:uppercase;
  letter-spacing:2px;
  font-size:32px;
  font-weight:500;
}

.section-title{
  text-align:center;
  max-width:700px;
  margin:20px auto 0;
  color:#1f2937;
  font-size:48px;
  font-weight:500;
  line-height:1.2;
}

.benefits-grid{
  margin-top:60px;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:24px;
}

.benefit-card{
  background:white;
  border-radius:16px;
  border:1px solid #ece8e1;
  padding:32px;
  min-height:255px;
}

.icon-box{
  width:48px;
  height:48px;
  border:1px #ffff;
  border-radius:12px;
  background:#EF4E3C1C;
  color:#EF4E3C;
  display:flex;
  align-items:center;
  justify-content:center;
}

.benefit-title{
  margin-top:22px;
  font-size:18px;
  font-weight:600;
  color:#111827;
}

.benefit-text{
  margin-top:10px;
  color:#6b7280;
  font-size:14px;
  line-height:1.8;
}

@media(max-width:900px){
  .benefits-grid{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:600px){
  .benefits-grid{
    grid-template-columns:1fr;
  }

  .section-title{
    font-size:34px;
  }
}
`;

const benefits = [
  {
    icon:"↗",
    title:"Real growth",
    text:"Senior mentorship, generous L&D budget, and clear career paths."
  },
  {
    icon:"👥",
    title:"Senior peers",
    text:"Work alongside practitioners who raise your bar every day."
  },
  {  
    icon:"💰",
    title:"Top-tier comp",
    text:"Above-market compensation with full benefits and equity."
  },
  {
    icon:"⏰",
    title:"Real flexibility",
    text:"Hybrid by default. Outcomes over hours. Time off when you need it."
  }
];

export default function WhyJoinSection() {
  return (
    <>
      <style>{styles}</style>

      <section className="why-section">
        <div className="why-container">

          <div className="section-tag">
            Why Join Cube R
          </div>

          <h2 className="section-title">
            A workplace built around the work—and the people doing it
          </h2>

          <div className="benefits-grid">
            {benefits.map((item,index)=>(
              <div className="benefit-card" key={index}>
                <div className="icon-box">{item.icon}</div>

                <div className="benefit-title">
                  {item.title}
                </div>

                <div className="benefit-text">
                  {item.text}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}