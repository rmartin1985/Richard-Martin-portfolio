import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";

function Header() {
    return (
        <header className="flex-row space-between px-1">
            <h1>
                <Link as={Link} to='/'>Richard Martin</Link>
            </h1>
            <Nav></Nav>
        </header>
    );
}

export default Header;