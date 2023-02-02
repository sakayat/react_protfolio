import React from 'react';
import Hero from "./Hero";
import Bio from "./Bio";
import Projects from "./Projects";
import Skill from "./Skill";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Hero />
            <Bio />
            <Projects />
            <Skill />
        </div>
    );
};

export default Home;
