import React from "react";
import img from "./../assets/airbnb.png"

function Navbar() {
    return (
        <div className="navbar">
            <img src={img} alt="airbnb logo" className="navbar--logo"></img>
        </div>
    );
}

export default Navbar;