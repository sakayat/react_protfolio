import React, { useRef } from "react";
import { useHeadlineReveal, useImageReveal } from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://res.cloudinary.com/dnl3wykao/image/upload/v1683732102/1674584025842_slqzgk.jpg",
  img2: "https://res.cloudinary.com/dnl3wykao/image/upload/v1683732102/1674584025842_slqzgk.jpg",
};

const Hero = () => {
  const heroImg = useRef(null);
  const headLine1 = useRef(null);
  const headLine2 = useRef(null);

  const headLines = [headLine1, headLine2];

  useHoverEffect(heroImg, data.img1, data.img2);
  useImageReveal(heroImg, 0.5);
  useHeadlineReveal(headLines, 1.5);

  return (
    <div className="flex items-center justify-center relative mt-20">
      <div className="hero-img" ref={heroImg}></div>
      <div className="shutter shutter-left z-10">
        <h1 className="headline-1" ref={headLine1}>
          front-end
        </h1>
      </div>
      <div className="shutter shutter-right z-10">
        <h1 className="headline-2" ref={headLine2}>
          Developer
        </h1>
      </div>
    </div>
  );
};

export default Hero;
