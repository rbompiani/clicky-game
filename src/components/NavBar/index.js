import React from "react";

function NavBar(props) {
    return (
        <div id="navBar">
            <div id="logo">
                Clicky Game!
            </div>
            <div id="score">Score: {props.score}</div>
            <div id="topScore">Top Score: {props.highScore}</div>
        </div>
    )
}

export default NavBar;