import React, { useRef } from "react";
import { useFooterReveal } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  useFooterReveal(footerRef);
  return (
    <div ref={footerRef}>
      <p className="text-center my-20">
        Copyright {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
};

export default Footer;
