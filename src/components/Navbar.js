import React from 'react';
import "./Navbar.css";
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
    return (
        <>
        {/* logo part */}
            <nav className="main-nav">
                <div classname="logo">
                    <h2>
                        <span>M</span>yntra
                    </h2>
                </div>
            {/* 2nd menus */}
            <div className="menu-link">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">New Arrivals</a>
                    </li>
                    <li>
                        <a href="#">Rewards</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                      {/* search icon */}
                      <div className="search-bar">
                      <SearchIcon/>
                      <input type="text"/>
                      </div>
                </ul>
              
            </div>
            </nav>

            {/* Chat sec */}
            <section className="chat-section">
            <h1>lets Chat here</h1>
            </section>
        </>
    )
}

export default Navbar
