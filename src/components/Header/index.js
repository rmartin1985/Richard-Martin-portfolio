import React, { useState} from "react";
import Nav from "../Nav";

function Header() {
    const [pages] = useState([
        {
            name: 'About',
            id: 1
        },
        {
            name: 'Portfolio',
            id: 2
        },
        {
            name: 'Contact',
            id: 3
        },
        {
            name: 'Resume',
            id: 4
        }
    ]);

    const [currentPage, setCurrentPage] = useState('');

    const [pageSelected, setPageSelected] = useState(false);

    return (
        <header>
            <Nav 
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageSelected={pageSelected}
            setPageSelected={setPageSelected}></Nav>
        </header>
    );
}

export default Header;