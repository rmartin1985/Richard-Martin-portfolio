import React from "react";
import { Link } from 'react-router-dom';

function Nav() {

    return (
        
            <nav>
                <ul className="flex-row space-evenly">
                    <li className="mx-2">
                        <Link as={Link} to='/about'>about</Link>
                    </li>
                    <li className="mx-2">
                        <Link as={Link} to='/portfolio'>portfolio</Link>
                    </li>
                    <li className="mx-2">
                        <Link as={Link} to='/contact'>contact</Link>
                    </li>
                    <li className="mx-2">
                        <Link as={Link} to='resume'>resume</Link>
                    </li>
                </ul>
            </nav>
       
    );
}

export default Nav;