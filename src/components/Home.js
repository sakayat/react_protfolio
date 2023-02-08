import React from "react";
import Hero from "./Hero";
import Bio from "./Bio";
import Projects from "./Projects";
import Skill from "./Skill";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Bio />
      <Projects />
      <Skill />
      <About />
      <Contact />
    </>
  );
};

export default Home;
