import React from 'react';
import worldIcon from '../assets/world.svg';

function Header() {
    return (
        <div className="header">
            <img src={worldIcon} className="header-icon"></img>
            <p className="header-text">my travel journal.</p>
        </div>
    )
}

export default Header;