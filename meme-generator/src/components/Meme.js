import React, { useState } from "react";
import memesData from "../components/memesData";

function Meme() {

    function getMemeImage() {
        let memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(prev => {
            return {
                ...prev,
                randomImage: memesArray[randomNumber].url
            }
        });
    }

    const [memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function handleChange(event) {
        const { name, value } = event.target;
        setMemeImage(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
 
    return (
        <div className="meme">
            <div className="meme-input-form">
                <input 
                    type="text" 
                    name="topText" 
                    placeholder="Top text"
                    value={memeImage.topText}
                    onChange={handleChange}
                    className="meme-top-text meme-text" />
                <input 
                    type="text" 
                    name="bottomText" 
                    placeholder="Bottom text"
                    value={memeImage.bottomText}
                    onChange={handleChange}
                    className="meme-bottom-text meme-text"/>
            </div>
            <div className="meme-input-button">
                <button className="meme-button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme-image">
                <img src={memeImage.randomImage} alt="meme" className="meme--image"/>
                <div className="topOverlay">
                    {memeImage.topText}
                </div>
                <div className="bottomOverlay">
                    {memeImage.bottomText}
                </div>
            </div>
        </div>
        
    );
}

export default Meme;