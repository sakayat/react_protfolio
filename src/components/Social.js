import React, { useRef } from "react";
import { useSocialReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/sakayat",
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/sakayatkabir/",
  },
];

const Social = () => {
  const socialRef = useRef(null);
  useSocialReveal(socialRef, 2);
  return (
    <div
      className="social uppercase bg-black/30 text-sm text-white/30 flex fixed top-[75%] left-10 origin-left -rotate-90 gap-5 backdrop-blur-xl p-5"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          href={social.url}
          key={social.id}
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Social;
