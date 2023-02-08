import React, { useRef } from "react";
import { useSocialReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "facebook",
    url: "https://github.com/",
  },
  {
    id: 2,
    title: "twitter",
    url: "https://twitter.com/Sakhyat90",
  },
  {
    id: 3,
    title: "github",
    url: "https://github.com/sakhyat",
  },
  {
    id: 4,
    title: "linkedin",
    url: "https://www.linkedin.com/in/sakhyat-kabir-79b1a5196/",
  },
  {
    id: 5,
    title: "leetcode",
    url: "https://leetcode.com/sakhyat_kabir/",
  },
];

const Social = () => {
  const socialRef = useRef(null);
  useSocialReveal(socialRef, 2);
  return (
    <div
      className="social bg-black/30 text-white/30 flex fixed top-[75%] left-10 origin-left -rotate-90 gap-5 backdrop-blur-xl p-5"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          href={social.url}
          key={social.id}
          target="_blank"
          rel="noreferer"
          className="hover:text-cyan-400"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Social;
