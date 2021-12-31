import React from "react";

function Nav() {
    return (
        <header>
            <h1>
                Richard Martin
            </h1>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about-me">about me</a>
                    </li>
                    <li>
                        <a href="#work">projects</a>
                    </li>
                    <li>
                        <a href="#contact-me">contact me</a>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Nav;