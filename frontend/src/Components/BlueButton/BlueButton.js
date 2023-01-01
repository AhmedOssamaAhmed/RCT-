import React from "react";
import "./BlueButton.css"
import { useNavigate } from "react-router-dom";


function BlueButton(props) {
    let class_name = "BlueButton-Container";
    if(props.className == "transparent"){
        class_name = "TransparentButton-Container";
    }

    function onClick(){
        if(props.onClick != null){
            props.onClick();
        }
    }

    return (
        <button onClick={onClick} className = "Container">
            <p className = {class_name} style={{fontSize:props.fontSize, borderStyle:props.border, backgroundColor: props.bgColor}}>
                {props.text}
            </p>
        </button>
    )
}
export default BlueButton;
