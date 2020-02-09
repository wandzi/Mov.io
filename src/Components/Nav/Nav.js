import React from 'react'
import './Nav.scss';

const Nav = () => {
    return(
        <nav className="nav">
            <div className="logo">
                <i class="fas fa-film"></i>
                <h1>Search.io</h1>
            </div>
            <div className="search-box">
                <input type="text"></input>
                <i class="fas fa-search"></i>
            </div>
        </nav>
    );
}

export default Nav