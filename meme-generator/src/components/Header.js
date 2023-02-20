import React from "react";
import trollFace from "../assets/TrollFace.png";

function Header() {
    return (
        <div className="header">
            <img src={trollFace} className="header-trollface" alt="trollface"></img>
            <span className="header-title">Meme Generator</span>
            <span className="header-title-end">React Course - Part 3</span>
        </div>
    );
}

export default Header;