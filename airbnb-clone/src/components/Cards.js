import React from "react";
import star from "../assets/Star.png";

function Cards(props) {
    let badgeText;
    if (props.card.openSpots === 0)
        badgeText = "SOLD OUT";
    else if (props.card.location === "Online")
        badgeText = "ONLINE";
    return (
        <div className="cards--main">
            {badgeText && <div className="cards--badge">{badgeText}</div>}
            <img src={require( `../assets/${props.card.coverImg}` )} alt="" className="cards--image"/>
            <div className="cards--stats">
                <img src={star} alt="" className="cards--star"></img>
                <span className="cards--detail-rating">{props.card.stats.rating}</span>
                <span className="cards--detail-num gray">({props.card.stats.reviewCount})•</span>
                <span className="cards--detail-country gray">{props.card.location}</span>
            </div>
            <p className="cards--title">{props.card.title}</p>
            <p className="cards-price"><span className="bold">From ${props.card.price} </span>/ person</p>
        </div>
    )
}

export default Cards;