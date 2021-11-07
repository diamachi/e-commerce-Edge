import React from 'react';
import "./Navbar.css";
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
    return (
        <>
            {/* logo part */}
            <nav className="main-nav">
                <ul className="nav-list">
                    <li className="list-item logo">
                        <a href="#">Myntra</a>
                    </li>
                    <li className="list-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="list-item">
                        <a href="#">New Arrivals</a>
                    </li>
                    <li className="list-item">
                        <a href="#">Rewards</a>
                    </li>
                    <li className="list-item">
                        <a href="#">Contact</a>
                    </li>
                    {/* search icon */}
                    <li className="list-item search-bar">
                        <SearchIcon />
                        <input type="text" placeholder="Search" />
                    </li>

                </ul>

            </nav>
            {/* Chat sec */}
        </>
    )
}

export default Navbar