import React from "react";
import "./TabBar.css"
import logo from '../../Assets/rct-logo.png'
import { Link } from "react-router-dom";

function TabBar(props){

    return (
        <div className="TabBar">
            <Link to="/home" style={{textDecoration:"none"}}>
            <div className="TabBarRight">
                <span className="TabBarLogo">
                    <img src={logo} alt="Tester" className="rctLogo" />
                </span>
                <span className="TabBarTitle">Rehab Cycling Team</span>
            </div>
            </Link>
            <div className="bar-links">{props.links ? props.links.map((link, i) => {
                return( 
                <Link className="bar-link" to={link[1]}>
                    {link[0]}
                </Link>
                );
            }) : <></>}</div>
        </div>
    )
}

export default TabBar;
