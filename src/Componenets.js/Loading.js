import React, { useEffect, useState } from "react";
import "./Loading.css";

function Loading({ message = "Loading..." }) {
  // ✅ Define state to track visibility
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.querySelector("nav")?.offsetHeight || 20; // adjust if needed

      // When user scrolls past navbar height, hide the loader
      if (window.scrollY >= navHeight) {
        setHideLoader(true);
      } else {
        setHideLoader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`loading-container ${hideLoader ? "hide-loader" : ""}`}
      role="status"
      aria-live="polite"
      aria-busy={!hideLoader}
    >
      <div className="spinner" aria-hidden="true"></div>
      <p className="loading-message">{message}</p>
    </div>
  );
}

export default Loading;
