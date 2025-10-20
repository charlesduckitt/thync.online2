import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If there's a hash, try scrolling to the element with that id
    if (hash) {
      // small timeout to allow the element to exist after route change
      setTimeout(() => {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
        // fallback to top if the anchor wasn't found
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0);
    } else {
      // default: scroll to top on route change
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
