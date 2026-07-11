import "./AboutWhatDrivesUs.css";
import { Target, Eye, Heart } from "lucide-react";

const AboutWhatDrivesUs = () => {
  return (
    <section className="drives">
      <div className="drives-header">
        <span className="drives-tag">WHAT DRIVES US</span>

        <h2>Mission, vision, and Promises</h2>

        <p>
          We design, build, and deliver technology that helps you work smarter —
          not harder.
        </p>
      </div>

      <div className="drives-cards">
        <div className="drive-card">
          <div className="icon-box">
            <Target size={20} />
          </div>

          <h3>Our Mission</h3>

          <p>
            To help ambitious US enterprises move faster by delivering elite
            talent, software, and communication infrastructure under one
            accountable roof.
          </p>
        </div>

        <div className="drive-card">
          <div className="icon-box">
            <Eye size={20} />
          </div>

          <h3>Our Vision</h3>

          <p>
            A world where every business — regardless of size — has access to
            senior-level technology partnership and execution.
          </p>
        </div>

        <div className="drive-card">
          <div className="icon-box">
            <Heart size={20} />
          </div>

          <h3>Our Values</h3>

          <p>
            Craft over speed. Honesty over optics. Long partnerships over
            transactions. We say no when no is the right answer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutWhatDrivesUs;