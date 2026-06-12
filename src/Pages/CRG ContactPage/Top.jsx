import { useState } from "react";
 
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap');
 
  .contact-top {
    font-family: 'Inter', sans-serif;
    min-height: calc(100vh - 80px);
    padding: 0 0 48px 0;
    position: relative;
    overflow: hidden;
  }
 
  .hero-section {
    text-align: center;
    padding: 56px 24px 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
 
  \.top-hero-title {
  font-size: 64px;
  font-weight: 600;
  color: #ee7b6d;
  line-height: 1.05;
  margin: 0;
  letter-spacing: -0.04em;

  font-family: 'Inter', sans-serif;
}
 
  .hero-subtitle {
    font-size: 20px;
    font-weight: 400;
    color: #47596B;
    line-height: 28px;
    max-width: 700px; 
    margin: 0 auto;
    font-weight: 400;
  }
 
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color:#EF4E3C;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 16px 16px;
    border-radius: 8px;
    transition: background 0.2s ease;
    text-decoration: none;
  }
 
  .btn-primary:hover { background-color: #a84430; }
  .btn-primary svg { flex-shrink: 0; }
 
  /* Cards row */
  .cards-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 0 48px;
    box-sizing: border-box;
  }
 
  @media (max-width: 640px) {
    .cards-row { grid-template-columns: 1fr; padding: 0 16px; }
  }
 
  .card {
    width: 100%;
    background: #FFFFFF99;
    border-radius: 16px;
    border: 1px solid #e8e0da;
    padding: 40px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.06);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
 
  .card-eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    color: #c0533a;
    margin-bottom: 10px;
  }
 
  .card-eyebrow svg { flex-shrink: 0; }
 
  .card-title {
    font-size: 30px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 8px;
    line-height: 1.25;
    letter-spacing: -0.75px;
  }
 
  .card-description {
    font-size: 0.85rem;
    color: #777;
    line-height: 1.6;
    margin: 0;
  }
 
  /* Calendly placeholder — flex:1 fills remaining height, centers content */
  .calendly-placeholder {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #A1A1AA;
    font-size: 0.8rem;
    text-align: center;
    margin-top: 24px;
  }
 
  .calendly-icon {
    width: 52px; height: 52px;
    background: #fef3ef;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    color: #c0533a;
  }
 
  .calendly-label {
    font-weight: 400;
    color: #09090B;
    font-size: 14px;
    width: 320px;
    line-height: 20px;
  }
 
  .calendly-hint { color: #aaa; font-size: 0.78rem; max-width: 180px; }
 
  .btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: #EF4E3C;
    color: #fff;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    padding: 16px 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    margin-top: 28px;
    margin-bottom: 12px;
    text-decoration: none;
    width: fit-content;
    align-self: center;
  }
  .btn-outline:hover { background: #a84430; }
 
  /* Form card */
  .form-subtitle {
    font-size: 0.83rem;
    color: #888;
    margin: 4px 0 20px;
  }
 
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 12px;
  }
 
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }
 
  .form-group:last-child { margin-bottom: 0; }
 
  .form-label {
    font-size: 0.78rem;
    color: #555;
    font-weight: 500;
    margin-bottom: 5px;
  }
 
  .form-input, .form-textarea, .form-select {
    font-family: 'Inter', sans-serif;
    font-size: 0.84rem;
    color: #222;
    background: #fafafa;
    border: 1px solid #e8e0da;
    border-radius: 6px;
    padding: 9px 12px;
    outline: none;
    transition: border-color 0.18s;
    width: 100%;
    box-sizing: border-box;
  }
 
  .form-input::placeholder, .form-textarea::placeholder { color: #bbb; }
  .form-input:focus, .form-textarea:focus, .form-select:focus {
    border-color: #c0533a;
    background: #fff;
  }
 
  .form-textarea {
    resize: vertical;
    min-height: 80px;
  }
 
  .form-select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 32px;
    cursor: pointer;
  }
 
  .btn-send {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #EF4E3C;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 0.88rem;
    font-weight: 600;
    padding: 13px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    margin-top: 18px;
    letter-spacing: 0.01em;
    transition: background 0.2s;
  }
  .btn-send:hover { background: #a84430; }
`;
 
function IconCalendar({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1 7h14" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
 
function IconArrow({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
 
function IconSend({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M12 7H2M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconMail({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 12" fill="none">
      <rect x="1" y="1" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1 3l6.5 4L14 3" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}

 
function BookCallCard() {
  return (
    <div className="card">
      <div className="card-eyebrow">
        <IconCalendar size={20} />
        Book a call
      </div>
      <h2 className="card-title">30-minute discovery call</h2>
      <p className="card-description">
        Pick a time that works for you. Talk directly with a senior practitioner.
      </p>
 
      <div className="calendly-placeholder">
        <div className="calendly-icon">
          <IconCalendar size={36} />
        </div>
        <div className="calendly-label">Calendly Embed</div>
        <div className="calendly-hint">
          Replace this block with your Calendly inline widget script for live booking.
        </div>
      </div>
 
      <a href="#" className="btn-outline">
        Open Calendar <IconArrow />
      </a>
    </div>
  );
}
 
function SendNoteCard() {
  const [form, setForm] = useState({
    fullName: "", company: "", workEmail: "",
    interest: "US IT Staffing", message: ""
  });
 
  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
 
  return (
    <div className="card">
      <div className="card-eyebrow">
        <IconMail size={20} />
        Send a note
      </div>
      <h2 className="card-title">Tell us about your project</h2>
      <p className="form-subtitle">A few details help us route you to the right team faster.</p>
 
      <div className="form-row">
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Full name</label>
          <input className="form-input" name="fullName" placeholder="Jane Doe" value={form.fullName} onChange={handleChange} />
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Company</label>
          <input className="form-input" name="company" placeholder="Acme Inc." value={form.company} onChange={handleChange} />
        </div>
      </div>
 
      <div className="form-group" style={{ marginTop: 12 }}>
        <label className="form-label">Work email</label>
        <input className="form-input" name="workEmail" type="email" placeholder="jane@acme.com" value={form.workEmail} onChange={handleChange} />
      </div>
 
      <div className="form-group">
        <label className="form-label">I'm interested in</label>
        <select className="form-select" name="interest" value={form.interest} onChange={handleChange}>
          <option>US IT Staffing</option>
          <option>Product Design</option>
          <option>Engineering</option>
          <option>Consulting</option>
        </select>
      </div>
 
      <div className="form-group">
        <label className="form-label">Message</label>
        <textarea className="form-textarea" name="message" placeholder="Briefly tell us what you're working on..." value={form.message} onChange={handleChange} />
      </div>
 
      <button className="btn-send">
        Send Message <IconSend />
      </button>
    </div>
  );
}
 
export default function Top() {
  return (
    <>
      <style>{styles}</style>
      <section className="contact-top">
        <div className="hero-section">
          <p className="top-hero-title">Let's start a conversation.</p>
          <p className="hero-subtitle">
            Book a discovery call directly on our calendar, or send us a note. Either
            way, you'll hear from a senior team member within one business day.
          </p>
          <a href="#" className="btn-primary">
            View Open Positions <IconArrow />
          </a>
        </div>
 
        <div className="cards-row">
          <BookCallCard />
          <SendNoteCard />
        </div>
      </section>
    </>
  );
}