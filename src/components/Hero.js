import React, {useRef} from 'react';
import {useHoverEffect} from "../hook/usehoverEffect";

const data = {
    img1: "https://cdn.pixabay.com/photo/2016/09/01/10/33/witchs-house-1635770_960_720.jpg",
    img2: "https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg"
}

const Hero = () => {

    const heroImg = useRef(null)

    useHoverEffect(heroImg, data.img1, data.img2)

    return (
        <div className="flex items-center justify-center overflow-hidden relative mt-20">
            <div className="hero-img" ref={heroImg}></div>
            <div className="shutter shutter-left">
                <h1 className="headline-1">front-end</h1>
            </div>
            <div className="shutter shutter-right">
                <h1 className="headline-2">Developer</h1>
            </div>
            <div className="circle-left"></div>
            <div className="circle-right"></div>
        </div>
    );
};

export default Hero;
