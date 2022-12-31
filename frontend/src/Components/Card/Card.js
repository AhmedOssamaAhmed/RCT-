import React from "react";
import "./Card.css"
import logo from '../../Assets/rct-logo.png'
import WhiteContainer from "../WhiteContainer/WhiteContainer";

function Card(props){
    return(
        <div className="Container">
            <div className="ProfileContainer">
            <WhiteContainer>
            <div className="Profile-Image">
                <img src={logo} alt="Tester" className="profileImage"/>
            </div> 
            <div className="Profile-Name">
                <span className="profileName">
                    {props.FirstName}
                    <br/>
                    {props.LastName}
                </span>
            </div>
            </WhiteContainer>
            </div>
        </div>
    )
}

export default Card;