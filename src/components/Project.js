import React, { useRef } from "react";
import { useHoverEffect } from "../hook/usehoverEffect";

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
				<div className="link flex gap-10">
					{project.liveLink && (
						<a
							href={project.liveLink}
							target="_blank"
							rel="noreferrer"
							className=" uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-100 hover:text-black">
							Live Site
						</a>
					)}
					{project.frontEndLink && (
						<a
							href={project.frontEndLink}
							target="_blank"
							rel="noreferrer"
							className=" uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-100 hover:text-black">
							Front-End Site
						</a>
					)}
					{project.backEndLink && (
						<a
							href={project.backEndLink}
							target="_blank"
							rel="noreferrer"
							className=" uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-100 hover:text-black">
							Back-End Site
						</a>
					)}
				</div>
			</div>
			<div className="project-right col-span-2 justify-self-end" ref={projectRightRef}></div>
		</div>
	);
};

export default Project;
