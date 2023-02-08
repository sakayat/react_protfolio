import React from "react";

const Button = ({ project, button }) => {
  return (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noreferrer"
      className="uppercase py-8 px-14 border border-1  hover:bg-cyan-100 hover:text-black"
    >
      {button}
    </a>
  );
};

export default Button;
