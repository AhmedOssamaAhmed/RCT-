import React from "react";
import "./BlueButton.css"
import { useNavigate } from "react-router-dom";


function BlueButton(props) {
    let class_name = "BlueButton-Container";
    if(props.className == "transparent"){
        class_name = "TransparentButton-Container";
    }
    return (
        <div className = "Container">
            <p className = {class_name} style={{fontSize:props.fontSize, borderStyle:props.border}}>
                {props.text}
            </p>
        </div>
    )
}
export default BlueButton;