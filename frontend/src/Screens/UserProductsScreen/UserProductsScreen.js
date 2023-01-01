import React from "react";
import TabBar from "../../Components/TabBar/TabBar.js";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer.js";
import BlueButton from "../../Components/BlueButton/BlueButton.js";
import "./UserProductsScreen.css";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../Assets/rct-logo.png'

function UserProductsScreen(){
    const navigate = useNavigate()
    return(
        <div>
        	<TabBar links={[
        	    ["Events", "/events"],
        	    ["Announcements", "/announcements"],
        	    ["Products", "/products"],
        	]} />
            <div className="products">
                 <WhiteContainer>
					<h1>Our Products</h1>
                </WhiteContainer>
            </div>
                <div className="productsList">
                    <div className="Item">
                        <h2 className="Title">Test</h2>
                        <p>Lorum  Lorum Ipsum Lorum Ipsum</p>
                </div>
                    <div className="Item">
                        <h2>Test</h2>
                        <img src={logo} alt="Invalid" className="ItemPhoto"/>
                        <p>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum</p>
                        <p className="Link" onClick={() => navigate("/Item")}>Item Details</p>
                </div>
                    <div className="Item">
                        <h2>Test</h2>
                        <p>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum</p>
                </div>
                    <div className="Item">
                        <h2 className="productTitle">Test</h2>
                        <p>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum</p>
                </div>
            </div>
        </div>
    );
}

export default UserProductsScreen;
