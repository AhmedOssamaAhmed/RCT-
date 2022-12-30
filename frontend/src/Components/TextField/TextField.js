import React from "react";
import "./TextFiled.css";

function TextField(props) {
    return (
        <div className="textfield">
            <label className="textfield-label">{props.label}</label><br />
            <input className="textfield-input" type={props.type} name={props.label} 
            id={props.label} onChange={(data) => props.onChange(data.target.value)}/>
        </div>
    )
}

export default TextField;