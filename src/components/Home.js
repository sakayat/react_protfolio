import React from 'react';
import Hero from "./Hero";
import Bio from "./Bio";
import Projects from "./Projects";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Hero />
            <Bio />
            <Projects />
        </div>
    );
};

export default Home;
