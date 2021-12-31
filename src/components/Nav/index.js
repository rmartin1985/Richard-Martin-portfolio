import React from "react";

function Nav() {
    
    return (
        <nav>
            <ul className="flex-row space-evenly">
                <li className="mx-2">
                    <a href="#about-me">about me</a>
                </li>
                <li className="mx-2">
                    <a href="#portfolio">portfolio</a>
                </li>
                <li className="mx-2">
                    <a href="#contact">contact</a>
                </li>
                <li className="mx-2">
                    <a href="#resume">resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;