import React from "react";
import "./TabBar.css"
import logo from '../../Assets/rct-logo.png'

function TabBar(){

    return (
        <div className="TabBar">
            <div className="TabBarLogo">
                <img src={logo} alt="Tester" className="rctLogo" />
            </div>
            <span className="TabBarTitle">Rehab Cycling Team</span>
            {/* <p style={{color: "blue"}} className="TempText">Text</p> */}
        </div>
    )
}

export default TabBar;