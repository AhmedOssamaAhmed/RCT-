import React from "react";
import Riders from '../../Assets/rct-HomeScreen.png'
import "./UserHomeScreen.css";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer";
import BlueButton from "../../Components/BlueButton/BlueButton";
import TabBar from "../../Components/TabBar/TabBar";
import Card from "../../Components/Card/Card";
import { useNavigate } from "react-router-dom";
import StaticContent from "../../Components/StaticContent/StaticContent";
import {get} from "../../Hooks/Network.js";


function UserHomeScreen(){

    const navigate = useNavigate();
    const [Title,setTitle] = React.useState("")
    const [Description,setDescription] = React.useState("")
    
	React.useEffect(
        () => {
            // get token
            let token = localStorage.getItem("token");
        
            // check to see if token belongs to an adminstrator
            get("get_static_text.php", {}, (response) => {
                setTitle(response.data.content[0].title)
                setDescription(response.data.content[0].description)
            });
        },[]);
    
    return(
        <>
        <TabBar links={[
            ["Events", "/events"],
            ["Announcements", "/announcements"],
            ["Products", "/products"],
        ]} />
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
                <StaticContent Title={Title} Content={Description}/>
            </div>
            <div className="Fourth-Section">
            <StaticContent Title={Title} Content={Description}/>
            </div>
            <div className="Fifth-Section">
            <StaticContent Title={Title} Content={Description}/>
            </div>
            <div className="Sixth-Section">
            <StaticContent Title={Title} Content={Description}/>
            </div>
            
        </div>
        </>
    )
}

export default UserHomeScreen;
