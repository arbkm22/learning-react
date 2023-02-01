import React from "react";
import pin from "../assets/pin.png";

function Card(props) {
    return (
        <div className="card--main">
            <div>
                <img className="card--image" src={props.img} alt=""></img>
            </div>
            <div className="card--detail">
                <div className="card--detail-header">
                    <img src={pin} className="card--detail-header-pin"></img>
                    <p className="card--detail-header-location">{props.country}</p>
                    <a className="card--detail-header-place" href={props.mapLink}>View on Google Maps</a>
                </div>
                <div className="card--detail-place">
                    <h2>{props.place}</h2>
                </div>
                <div className="card--detail-duration">
                    <h3>{props.startDate} - {props.endDate}</h3>
                </div>
                <div className="card--detail-description">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;