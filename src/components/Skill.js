import React from "react";
import SectionTitle from "./SectionTitle";

const data = [
	{ id: 1, title: "HTML" },
	{ id: 2, title: "CSS" },
	{ id: 3, title: "Bootstrap" },
	{ id: 4, title: "Tailwind CSS" },
	{ id: 5, title: "JavaScript" },
	{ id: 6, title: "React.js" },
	{ id: 7, title: "React Router" },
	{ id: 8, title: "Redux.js" },
	{ id: 9, title: "Redux Toolkit" },
	{ id: 10, title: "Axios" },
	{ id: 11, title: "GSAP" },
	{ id: 12, title: "Firebase" },
];

const Skill = () => {
	return (
		<div className="skills mt-40" id="skills">
			<SectionTitle title={"Skills"} />
			<div className="skills-wrapper grid grid-cols-2 gap-10 mt-40">
				<ul className="skill-left flex flex-col gap-10">
					{data
						.filter((_, i) => i < Math.floor(data.length / 2))
						.map((skill, i) => (
							<li className="flex gap-10 items-baseline skill-item" key={skill.id}>
								<span className="skill-number text-white/30">{`${skill.id}`.padStart(2,0).padEnd(3,".")}</span>
								<span>{skill.title}</span>
							</li>
						))}
				</ul>
				<ul className="skill-right flex flex-col gap-10">
					{data
						.filter((_, i) => i > Math.floor(data.length / 2))
						.map((skill) => (
							<li className="flex gap-10 items-baseline skill-item" key={skill.id}>
								<span className="skill-number text-white/30">{`${skill.id}`.padStart(2,0).padEnd(3,".")}</span>
								<span className="">{skill.title}</span>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default Skill;
