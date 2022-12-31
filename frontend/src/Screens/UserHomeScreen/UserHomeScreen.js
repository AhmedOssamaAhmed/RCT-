import React from "react";
import logo from '../../Assets/rct-logo.png'
import "./UserHomeScreen.css";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer";
import BlueButton from "../../Components/BlueButton/BlueButton";
import Card from "../../Components/Card/Card";


function UserHomeScreen(){

    return(
        <div className="background">
            <div className="First-Section">
                {/* TODO : Add another picture */}
                <div className="Rct-Image">
                    <img src={logo} alt="Tester" className="rctImage"/>
                </div>
                <div className="Text-Container">
                    <WhiteContainer>
                        <div className="Hero">
                        <div>
                            <h2 className="Text">
                                Encouraging <br/>
                                Sports <br/> 
                                for All!!
                            </h2>
                        </div>
                        <div className="Buttons">
                        <div className="Unfilled-Button">
                            <BlueButton text="Our Events" className="transparent" />
                        </div>
                        <div className="Filled-Button">
                            <BlueButton text="Ramadan Challenge"/>
                        </div>
                        </div>
                        </div>
                    </WhiteContainer>
                </div>
            </div>

            <div className="Second-Section">
                {/* TODO : Add name to profile */}
                <Card FirstName="Moahmmed" LastName="El Zoughby"/>
                <Card FirstName="Moahmmed" LastName= "El Zoughby"/>
                <Card FirstName="Moahmmed" LastName="El Zoughby"/>
            </div>
            
        </div>
    )
}

export default UserHomeScreen;