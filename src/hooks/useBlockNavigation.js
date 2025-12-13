import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useBlockNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname.startsWith("/orderconfirmation") ||
      location.pathname.startsWith("/reservationconfirmation")
    ) {
      window.history.pushState(null, "", window.location.href);

      const handlePopState = () => {
        navigate("/dashboard", { replace: true });
      };
      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [location.pathname, navigate]);
}
