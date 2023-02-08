import React, { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);
  useBioReveal(bioRef, 2);
  return (
    <div className="overflow-hidden mt-20" ref={bioRef}>
      <p>
        I am a Front-End Developer specialized in building responsive web
        applications using React, Redux, Tailwind CSS and GSAP. My expertise in
        UI design and animation allows me to create visually appealing and
        functional solutions. I am dedicated to delivering high-quality work and
        staying up-to-date with the latest web development trends.
      </p>
    </div>
  );
};

export default Bio;
