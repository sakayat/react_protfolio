import React from 'react';
import {HashLink} from "react-router-hash-link";

const Navbar = () => {
    return (
        <div>
            <nav className="container mx-auto flex justify-between uppercase mt-20">
                <div className="logo">
                    <HashLink smooth to="#home">Sakhyat kabir</HashLink>
                </div>
                <ul className="nav-link flex flex-col gap-3">
                    <li>
                        <HashLink smooth to="#home" className="link-item">Home</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#projects" className="link-item">Projects</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#home" className="link-item">Skill</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#home" className="link-item">About</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#home" className="link-item">Contact</HashLink>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noreferrer" className="link-item">Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
