import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = ({ footerName }) => {
	return (
		<div>
			<nav className={`container mx-auto flex justify-between uppercase ${footerName ? "mt-40" : "mt-20"}`}>
				<div className="logo">
					<HashLink smooth to="#home">
						{footerName ? "Got to top " : "Sakhyat kabir"}
					</HashLink>
				</div>
				<ul className="nav-link flex flex-col gap-3">
					<li>
						<HashLink smooth to="#home" className="link-item">
							Home
						</HashLink>
					</li>
					<li>
						<HashLink smooth to="#projects" className="link-item">
							Projects
						</HashLink>
					</li>
					<li>
						<HashLink smooth to="#skills" className="link-item">
							Skill
						</HashLink>
					</li>
					<li>
						<HashLink smooth to="#about" className="link-item">
							About
						</HashLink>
					</li>
					<li>
						<HashLink smooth to="#contact" className="link-item">
							Contact
						</HashLink>
					</li>
					<li>
						<a href="/" target="_blank" rel="noreferrer" className="link-item">
							Resume
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
