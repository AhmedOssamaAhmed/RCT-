import React from "react";
import "./WhiteContainer.css"


function WhiteContainer(props) {
    return (
        <div className="WhiteContainer-Main" >
            <div className="whiteContainer-background" style={{backgroundColor: props.backgroundColor}} >
                {props.children}
            </div>
        </div>

    );
}

export default WhiteContainer;