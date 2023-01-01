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
            <div className="Events">
                <WhiteContainer>
					<h1>Our Events</h1>
                </WhiteContainer>
            </div>
            {/* {shownEvents.map((events) => {
                return (
                    <div>
                        Test
                    </div>
                )
            })}  */}
        </>
    );
}

export default UserEventsScreen;
