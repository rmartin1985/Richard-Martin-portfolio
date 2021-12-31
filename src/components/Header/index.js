import React from "react";
import Nav from "../Nav";

function Header() {
    return (
        <header className="flex-row space-between px-1">
            <h1>
                Richard Martin
            </h1>
            <Nav></Nav>
        </header>
    );
}

export default Header;