import React, { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);
  useBioReveal(bioRef, 2);
  return (
    <div className="overflow-hidden mt-20" ref={bioRef}>
      <p>
        I am a React Frontend Developer with expertise in creating dynamic and
        interactive user interfaces for web applications. With my experience in
        using React hooks and Redux for state management, I am well versed in
        the React library, its components and lifecycle methods.
      </p>
    </div>
  );
};

export default Bio;
