import React from "react";
import "./Card.css"
import logo from '../../Assets/rct-logo.png'
import WhiteContainer from "../WhiteContainer/WhiteContainer";

function Card(props){
    let Class_Name = "Main-Image";
    let Container = "MainContainer"
    let Title = "profileName"
    if(props.CardType == "Side"){
        Class_Name = "Side-Image"
        Container = "SideContainer"
        Title = "SideName"
    }
    return(
        <div className={Container}>
            <div className="ProfileContainer">
            <div className={Class_Name}>
                <img src={logo} alt="Tester" className={Class_Name}/>
            </div> 
            <div className="Profile-Name">
                <span className={Title}>
                    {props.FirstName}
                    <br/>
                    {props.LastName}
                </span>
            </div>
            </div>
            
        </div>
    )
}

export default Card;