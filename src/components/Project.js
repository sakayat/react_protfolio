import React, { useRef } from "react";
import { useHoverEffect } from "../hook/usehoverEffect";
import Button from "./Button";

const Project = ({ project }) => {
	const projectRightRef = useRef(null);

	useHoverEffect(projectRightRef, project.img1, project.img2);

	return (
		<div className="project grid grid-cols-5">
			<div className="project-left flex flex-col col-span-3 gap-10">
				<span className="text-9xl text-white/20">{String(project.id).padStart(2, 0)}</span>
				<h3 className="uppercase leading-relaxed text-5xl text-cyan-400">{project.title}</h3>
				<p>{project.description}</p>
				<div className="tools flex flex-wrap gap-5 text-cyan-400">
					{project.tools.map((tool, i) => (
						<span key={i}>{tool}</span>
					))}
				</div>
				<div className="link flex flex-wrap gap-10">
					{project.liveLink && <Button project={project} button={"Live Site"} />}
					{project.frontEndLink && <Button project={project} button={"Front-End Site"} />}
					{project.backEndLink && <Button project={project} button={"Back-End Site"} />}
				</div>
			</div>
			<div className="project-right col-span-2 justify-self-end" ref={projectRightRef}></div>
		</div>
	);
};

export default Project;
