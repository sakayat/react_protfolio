import React, { useRef } from "react";
import { useSectionTitleReveal } from "../hooks/gsap";

const SectionTitle = ({ title }) => {
  const sectionTitleRef = useRef(null);
  useSectionTitleReveal(sectionTitleRef);
  return (
    <div className="overflow-hidden">
      <h2 className="section-title max-sm:text-7xl" ref={sectionTitleRef}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
