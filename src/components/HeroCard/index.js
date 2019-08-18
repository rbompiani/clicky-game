import React from "react";
import "./style.css";


function HeroCard(props) {
    return (
        <div className="heroCard" onClick={() => props.selectCard(props.id)}>
            <img src={process.env.PUBLIC_URL + props.image} alt={props.name}/>
        </div>
    )
}

export default HeroCard;