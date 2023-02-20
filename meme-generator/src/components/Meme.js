import React from "react";

function Meme() {
    return (
        <div className="meme">
            <form className="meme-input">
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
                    <button type="submit" className="meme-button">Get a new meme image</button>
                </div>
            </form>
            <div className="meme-image">

            </div>
        </div>
    );
}

export default Meme;