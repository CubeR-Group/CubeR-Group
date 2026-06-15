const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

  .contact-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
  }

  .contact-info-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin: 0 auto;
  }

  @media (max-width: 560px) {
    .contact-info-row { grid-template-columns: 1fr; }
    .info-cell { border-right: none !important; border-bottom: 1px solid #ede5de; }
    .info-cell:last-child { border-bottom: none; }
  }

  .info-cell {
    background: #fff;
    width: 421.33px;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 24px;
    border-radius: 12px;
  }

  .info-cell:last-child { border-right: none; }

  .info-icon {
    width: 44px; height: 44px;
    background: #EF4E3C1A;
    border-radius: 16px;
    border: 1px solid #ede5de;
    display: flex; 
    align-items: center;
    justify-content: center;
    color: #c0533a;
    flex-shrink: 0;
  }

  .info-label {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #A1A1AA;
    margin-bottom: 3px;
  }

  .info-value {
    font-size: 16px;
    font-weight: 500;
    color: #47596B;
    line-height: 1.3;
  }

  .info-value a {
    color: inherit;
    text-decoration: none;
    transition: color 0.15s;
  }

  .info-value a:hover { color: #c0533a; }
`;

function IconMail({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  );
}

function IconPhone({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M3 2h3l1.5 3.5-1.75 1.25c.9 1.8 2.25 3.15 4.05 4.05L11.1 9l3.4 1.5V13a2 2 0 01-2 2C5.4 14.4 1.6 10.6 2 5a2 2 0 012-3h-.5z"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPin({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1a5 5 0 015 5c0 3.5-5 9-5 9S3 9.5 3 6a5 5 0 015-5z"
        stroke="currentColor" strokeWidth="1.4"
      />
      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  );
}

export default function Bottom() {
  return (
    <>
      <style>{styles}</style>
      <footer className="contact-bottom">
        <div className="contact-info-row">
          <div className="info-cell">
            <div className="info-icon"><IconMail /></div>
            <div>
              <div className="info-label">Email</div>
              <div className="info-value">
                <a href="mailto:hello@cubertgroup.com">hello@cubergroup.com</a>
              </div>
            </div>
          </div>

          <div className="info-cell">
            <div className="info-icon"><IconPhone /></div>
            <div>
              <div className="info-label">Phone</div>
              <div className="info-value">
                <a href="tel:+917337513399">+91-7337513399</a>
              </div>
            </div>
          </div>

          <div className="info-cell">
            <div className="info-icon"><IconPin /></div>
            <div>
              <div className="info-label">Headquarters</div>
              <div className="info-value">Hyderabad, IND . Delaware, USA</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}