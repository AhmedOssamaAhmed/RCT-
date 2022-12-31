import React from "react";
import "./BlueButton.css"

function BlueButton(props) {
    let class_name = "BlueButton-Container";
    if(props.className == "transparent"){
        class_name = "TransparentButton-Container";
    }
    return (
        <a className = {class_name}>
            {props.text}
        </a>
    )
}
export default BlueButton;