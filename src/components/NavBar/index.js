import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav>
            <div id="logo">
                Clicky Game!
            </div>
            <div id="instructions">
                Click on an image to earn points...<br></br>
                but don't click any image more than once!
            </div>
            <div id="score">Score: <b>{props.score}</b></div>
            <div id="topScore">Top Score: <b>{props.highScore}</b></div>

        </nav>
    )
}

export default NavBar;