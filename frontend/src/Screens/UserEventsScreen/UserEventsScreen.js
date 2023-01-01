import React from "react";
import TabBar from "../../Components/TabBar/TabBar.js";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer.js";
import BlueButton from "../../Components/BlueButton/BlueButton.js";
import "./UserEventsScreen.css";

function UserEventsScreen(){
    return(
        <>
        	<TabBar links={[
        	    ["Events", "/events"],
        	    ["Announcements", "/announcements"],
        	    ["Products", "/products"],
        	]} />
            <div className="products">
                <WhiteContainer>
					<h1>Our Events</h1>
                </WhiteContainer>
            </div> 
        </>
    );
}

export default UserEventsScreen;
