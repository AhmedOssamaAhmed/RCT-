import React from "react";
import Riders from '../../Assets/rct-HomeScreen.png'
import "./UserHomeScreen.css";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer";
import BlueButton from "../../Components/BlueButton/BlueButton";
import Card from "../../Components/Card/Card";
import { useNavigate } from "react-router-dom";
import StaticContent from "../../Components/StaticContent/StaticContent";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

function UserHomeScreen(){

    const navigate = useNavigate();

    return(
        <div className="background">
            <div className="First-Section">
                {/* TODO : Add another picture */}
                <div className="Rct-Image">
                    <img src={Riders} alt="Tester" className="rctImage"/>
                </div>
                <div className="Text-Container">
                    <WhiteContainer backgroundColor="#dcedc9" >
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
                            <BlueButton text="Our Events" className="transparent" fontSize="30px" border="none" onClick={() => navigate("/events")}/>
                        </div>
                        <div className="Filled-Button">
                            <BlueButton text="Ramadan Challenge" fontSize="30px" onClick={() => navigate("/events")}/>
                        </div>
                        </div>
                        </div>
                    </WhiteContainer>
                </div>
            </div>

            <div className="Second-Section">
                {/* TODO : Add name to profile */}
                <Card FirstName="Mohamed" LastName="El Zoughby" CardType="Side" />
                <Card FirstName="Hossam" LastName="AL Abraq"/>
                <Card FirstName="Abeer" LastName="Saad" CardType="Side"/>
            </div>
            
            <div className="Third-Section">
                <StaticContent Title="Who Are we?" Content="Lorum Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.Ipsum"/>
            </div>
            <div className="Fourth-Section">
                <StaticContent Title="Cycling" Content="Lorum Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.Ipsum"/>
            </div>
            <div className="Fifth-Section">
                <StaticContent Title="Running" Content="Lorum Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.Ipsum"/>
            </div>
            <div className="Sixth-Section">
                <StaticContent Title="Entertainment" Content="Lorum Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.Ipsum"/>
            </div>
            
        </div>
    )
}

export default UserHomeScreen;