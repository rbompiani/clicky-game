import React from "react";
import "./style.css";


function HeroCard(props) {
    return (
        <div className="heroCard" onClick={() => props.selectCard(props.id)}>{props.id}</div>
    )
}

export default HeroCard;