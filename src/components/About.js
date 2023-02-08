import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://i.postimg.cc/x1JLF6Q9/pexels-9521671.jpg",
  img2: "https://res.cloudinary.com/dnl3wykao/image/upload/v1675407065/pexels-anastasiya-lobanovskaya-789303_g0w785.jpg",
};

const About = () => {
  const aboutRef = useRef(null);

  useHoverEffect(aboutRef, data.img1, data.img2);

  return (
    <div className="about mt-40" id="about">
      <SectionTitle title={"About"} />
      <div className="about-wrapper mt-40 grid grid-cols-2 gap-20">
        <div className="about-right" ref={aboutRef}></div>
        <div className="about-left">
          <p>
            I am a MERN stack developer with a strong focus on React, Redux, and
            Tailwind CSS. I specialize in building responsive and user-friendly
            web applications that provide a seamless experience for the
            end-user. With my in-depth knowledge of the latest web development
            technologies and frameworks, I am able to create innovative
            solutions that meet the needs of my clients. Whether it's a simple
            website or a complex web application, I am committed to delivering
            high-quality work that exceeds expectations.
          </p>
          <p className="mt-10">
            In addition to my expertise in the MERN stack, I also have a strong
            background in UI design and animation. I am skilled in using the
            GreenSock Animation Platform (GSAP) library to create dynamic and
            engaging user interfaces. I have experience in creating smooth
            animations and transitions that enhance the overall user experience.
            I am also well-versed in using other design tools such as Adobe XD
            and Figma to create wireframes and mockups.
          </p>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-20 uppercase py-8 px-28 border white/20 border-1 hover:bg-cyan-100 hover:text-black"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
