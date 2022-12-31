import React from "react";
import "./StaticContent.css"
function StaticContent(props) {

    return (
        <div>
            <h1 className="Title">{props.Title}</h1>
            <div className="ContentContainer">
                <p className="Content">{props.Content}</p>
            </div>
        </div>
    )
}

export default StaticContent;