import React from "react";
import "./style.css";

function Wrapper (props) {
    return(
        <div id="wrapper">
            <div id="container">
                {props.children} 
            </div>
        </div>
    )
}

export default Wrapper;