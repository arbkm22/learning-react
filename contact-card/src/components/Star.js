import React from 'react';
import starEmpty from '../assets/star-empty.png';
import starFilled from '../assets/star-filled.png'

function Star(props) {

    const starImg = props.isFilled ? starFilled : starEmpty;

    return (
        <div>
            <img src={starImg} onClick={props.handleClick} className="card-favorite" alt='star icon'/>
        </div>
    )
}

export default Star;