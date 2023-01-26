import React from "react";
import img from "../assets/Group77.png"

function Hero() {
    return (
        <div className="hero">
            <img src={img} alt="Header images" className="hero--img"></img>
            <div className="hero--title">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind
                    hosts-all without leaving home
                </p>
            </div>
        </div>
    )
}

export default Hero;