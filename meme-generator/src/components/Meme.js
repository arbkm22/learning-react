import React, { useState } from "react";
import memesData from "../components/memesData";

function Meme() {

    function getMemeImage() {
        let memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url);
    }

    const [memeImage, setMemeImage] = useState("");
 
    return (
        <div className="meme">
            <div className="meme-input-form">
                <input 
                    type="text" 
                    name="top-text" 
                    placeholder="Top text"
                    className="meme-top-text meme-text" />
                <input 
                    type="text" 
                    name="bottom-text" 
                    placeholder="Bottom text"
                    className="meme-bottom-text meme-text"/>
            </div>
            <div className="meme-input-button">
                <button className="meme-button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme-image">
                <img src={memeImage} alt="meme" className="meme--image"/>
            </div>
        </div>
        
    );
}

export default Meme;