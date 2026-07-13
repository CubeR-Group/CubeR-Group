import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CareerHero from "./CareerHero";
import WhyJoinSection from "./WhyJoinSection";
import OpenRolesSection from "./OpenRolesSection";

export default function Career() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollToRoles) {
      setTimeout(() => {
        document.getElementById("open-roles")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        navigate(location.pathname, {
          replace: true,
          state: {},
        });
      }, 100);
    }
  }, [location, navigate]);

  return (
    <>
      <CareerHero />
      <WhyJoinSection />
      <OpenRolesSection />
    </>
  );
}