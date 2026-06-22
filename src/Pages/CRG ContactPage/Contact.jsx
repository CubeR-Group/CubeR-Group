import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Top from "./Top";
import Bottom from "./Bottom";

const Contact = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollToBookCall) {
      setTimeout(() => {
        document.getElementById("book-call")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        navigate(location.pathname, {
          replace: true,
          state: {},
        });
      }, 100);
    }
  }, [location, navigate]);

  return (
    <div style={{ paddingTop: "80px" }}>
      <Top />
      <Bottom />
    </div>
  );
};

export default Contact;