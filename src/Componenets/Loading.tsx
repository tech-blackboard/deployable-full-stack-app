import React, { useEffect, useState } from "react";

export default function Loading({ message = "Loading..." }) {
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.querySelector("nav")?.offsetHeight || 20;
      if (window.scrollY >= navHeight) {
        setHideLoader(false);// if here true it disappear when we scroll towards nav.
      } else {
        setHideLoader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-5 w-full p-11 bg-white/90 rounded-xl text-gray-700  h-[180px] relative overflow-hidden transition-all duration-200 ${hideLoader ? "opacity-0 -translate-y-5 pointer-events-none" : "opacity-100 translate-y-0"
        }`}
      role="status"
      aria-live="polite"
      aria-busy={!hideLoader}
    >
      {/* Spinner */}
      <div
        className="w-20 h-20 border-4  border-gray-300 border-t-blue-500 rounded-full animate-spin absolute p-11" 
      // aria-hidden="true"
      ></div>

      {/* Message */}
      <p className="text-xl text-gray-700 text-center m-0">{message}</p>
    </div>
  );
}
