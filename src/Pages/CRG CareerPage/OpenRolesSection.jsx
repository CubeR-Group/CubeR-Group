const styles = `
.roles-section{
  padding:0 20px 120px;
}

.roles-container{
  max-width:1200px;
  margin:auto;
}

.roles-tag{
  text-align:center;
  color:#ef5b4c;
  text-transform:uppercase;
  letter-spacing:4px;
  font-size:32px;
  font-weight:500;
}

.roles-title{
  text-align:center;
  margin-top:15px;
  color:#132436;
  font-size:48px;
  font-weight:500;
}

.roles-desc{
  text-align:center;
  max-width:900px;
  margin:20px auto 50px;
  color:#6b7280;
  font-size:18px;
  font-weight:400;
  line-height:28px;
}

.jobs-list{
  display:flex;
  flex-direction:column;
  gap:16px;
}

.job-card{
  background:#FFFFFF99;
  border-radius:14px;
  border:1px solid #ece8e1;
  padding:24px 20px;
  display:grid;
  grid-template-columns:2fr 1fr 120px 40px;
  align-items:center;
}

.job-title{
  font-size:18px;
  font-weight:700;
  color:#111827;
}

.job-team{
  margin-top:4px;
  color:#47596B;
  font-size:12px;
}

.job-location{
  color:#47596B;
  font-size:14px;
  font-weight:400;
}

.job-type{
  color:#EF4E3C;
  font-size:12px;
  font-weight:600;
  letter-spacing:2px;
}

.job-arrow{
  text-align:right;
  color:#EF4E3C;
  font-size:20px;
}

.cta-box{
  margin:120px auto 0;
  max-width:1000px;
  background:linear-gradient(
  45deg,
  #FFFFFF80 50%,
  #FFFFFFB2 70%,
  #fff0ee 90%);
  border-radius:24px;
  padding:80px 40px;
  text-align:center;
  border:1px #FFFFFF solid;
}

.cta-title{
  color:#1f2937;
  font-size:48px;
  font-weight:500;
}

.cta-text{
  max-width:600px;
  margin:20px auto;
  color:#6b7280;
  line-height:1.7;
}

.cta-btn{
  background:#ef5b4c;
  color:white;
  border:none;
  border-radius:8px;
  padding:12px 24px;
  font-weight:600;
  cursor:pointer;
}

@media(max-width:768px){

.job-card{
 grid-template-columns:1fr;
 gap:12px;
}

.roles-title,
.cta-title{
 font-size:34px;
}
}
`;

const jobs = [
  {
    title:"Senior Full-Stack Engineer",
    team:"Engineering",
    location:"Remote · US",
    type:"FULL-TIME"
  },
  {
    title:"Technical Recruiter",
    team:"Staffing",
    location:"Dallas, TX",
    type:"FULL-TIME"
  },
  {
    title:"AI Solutions Architect",
    team:"Vision Consulting",
    location:"Remote · US",
    type:"FULL-TIME"
  },
  {
    title:"Engineering Manager",
    team:"Engineering",
    location:"Remote · US",
    type:"FULL-TIME"
  },
  {
    title:"Account Director",
    team:"Client Services",
    location:"New York, NY",
    type:"FULL-TIME"
  }
];

export default function OpenRolesSection() {
  return (
    <>
      <style>{styles}</style>

      <section className="roles-section">
        <div className="roles-container">

          <div className="roles-tag">
            Open Roles
          </div>

          <h2 className="roles-title">
            Currently hiring
          </h2>

          <p className="roles-desc">
            Our leadership team brings together decades
            of experience in technology, business strategy,
            and client success.
          </p>

          <div className="jobs-list">
            {jobs.map((job,index)=>(
              <div className="job-card" key={index}>

                <div>
                  <div className="job-title">
                    {job.title}
                  </div>

                  <div className="job-team">
                    {job.team}
                  </div>
                </div>

                <div className="job-location">
                  <locationIcon /> {job.location}
                </div>

                <div className="job-type">
                  {job.type}
                </div>

                <div className="job-arrow">
                  ↗
                </div>

              </div>
            ))}
          </div>

          <div className="cta-box">
            <h2 className="cta-title">
              Don't see your role?
              <br />
              Reach out anyway
            </h2>

            <p className="cta-text">
              We're always interested in hearing from
              senior practitioners who care about craft.
            </p>

            <button className="cta-btn">
              Book a Call →
            </button>
          </div>

        </div>
      </section>
    </>
  );
}