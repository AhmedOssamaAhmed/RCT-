import React from "react";
import "./BlueButton.css"

function BlueButton(props) {
    return (
        <a className="BlueButton-Container">
            {props.text}
        </a>
    )
}
export default BlueButton;