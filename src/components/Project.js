import React, { useRef } from "react";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";

const Project = ({ project }) => {
  const projectLeftRef = useRef(null);
  const projectRightRef = useRef(null);
  useHoverEffect(projectRightRef, project.img1, project.img2);
  const projectsRefs = [projectRightRef, projectLeftRef];
  useProjectLeftRightReveal(projectsRefs);

  return (
    <div className="project grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="project-left">
            <div className="info flex flex-col gap-10">
                <span className="text-9xl text-white/20">{`${project.id}`.padStart(2,0)}</span>
                <h3 className="uppercase text-5xl leading-relaxed text-cyan-400">{project.title}</h3>
                <p className="text-white/75">{project.description}</p>
                <div className="tools flex flex-wrap gap-5">
                    {
                        project.tools.map((tool) => (
                            <span className="text-cyan-400">{tool}</span>
                        ))
                    }
                </div>
                <div className="links">
                    {project.liveLink && <a href={project.liveLink} className="inline-block uppercase py-8 px-28 border white/20 border-1 hover:bg-cyan-100 hover:text-black">Live Site</a>}
                </div>
            </div>
        </div>
        <div className="project-right row-start-1 lg:row-auto lg:justify-self-end" ref={projectRightRef}></div>
    </div>
  );
};

export default Project;
