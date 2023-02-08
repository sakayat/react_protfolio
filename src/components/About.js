import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://i.postimg.cc/x1JLF6Q9/pexels-9521671.jpg",
  img2: "https://res.cloudinary.com/dluzykyma/image/upload/v1675867752/kabir_profile_illustrator_e79298b1-9b2a-4e28-b1c9-9a9a54a7c98d_hhcsb2.png",
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
            I am a Front-End developer with a strong focus on React, Redux, and
            Tailwind CSS to every project. My expertise lies in building
            responsive and intuitive web applications that provide a smooth
            experience for users. I stay up-to-date with the latest technologies
            and frameworks, allowing me to deliver innovative solutions that
            meet my clients' needs. From simple websites to complex web
            applications, I am dedicated to delivering top-notch work that
            surpasses expectations. My goal is to create web solutions that not
            only meet, but exceed the requirements of my clients.
          </p>
          <p className="mt-10">
            I also have a strong background in UI design and animation. I am
            skilled in using the GreenSock Animation Platform (GSAP) library to
            create dynamic and engaging user interfaces. I have experience in
            creating smooth animations and transitions that enhance the overall
            user experience. I am also well-versed in using other design tools
            such as Adobe XD and Figma to create wireframes and mockups.
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
