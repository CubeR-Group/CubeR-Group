import "./AboutWhoWeAre.css";
import about1 from "../../assets/About/AboutWhoWeAre/p1.png"
import about2 from "../../assets/About/AboutWhoWeAre/p2.png"
import about3 from "../../assets/About/AboutWhoWeAre/p3.png"
import about4 from "../../assets/About/AboutWhoWeAre/p4.png"
const AboutWhoWeAre = () => {
  return (
    <section className="about-who">
      <div className="about-who-container">

        <div className="about-who-images">
         <img src={about1} alt="" className="about-img img1" />
         <img src={about2} alt="" className="about-img img2" />
         <img src={about3} alt="" className="about-img img3" />
         <img src={about4} alt="" className="about-img img4" />
        </div>

        <div className="about-who-content">
          <span className="about-tag">WHO WE ARE?</span>

          <h2>
            Born from frustration with mediocre IT partnerships.
          </h2>

          <p>
            Cube R Group was founded in 2012 by a group of senior practitioners
            who were tired of watching enterprises get handed off to junior
            teams the moment a contract was signed.
          </p>

          <p>
            Today, we operate three tightly-integrated practices — staffing,
            software, and video conferencing — under a single principle:
            senior people doing senior work, every time.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutWhoWeAre;