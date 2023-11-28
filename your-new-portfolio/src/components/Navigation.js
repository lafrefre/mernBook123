import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <header>
            <h1>
                <Link to="/">Miranda Mendoza</Link>
            </h1>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <Link to="/about-me">About Me</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/resume">Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;