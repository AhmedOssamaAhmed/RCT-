import React from "react";
import TabBar from "../../Components/TabBar/TabBar.js";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer.js";
import BlueButton from "../../Components/BlueButton/BlueButton.js";
import "./UserEventsScreen.css";
import {get} from "../../Hooks/Network.js";
import logo from '../../Assets/rct-logo.png'
import { useNavigate } from "react-router-dom";

function UserEventsScreen(){
    const navigate = useNavigate();
    const [shownProducts, setShownProducts] = React.useState([]);
    
    React.useEffect(
        () => {
            let token = localStorage.getItem("token");
            get("events.php", {"Authorization": token}, (response) => {
                setShownProducts(response.data.products);
            });
        },[]);
    return(
        <>
        	<TabBar links={[
        	    ["Events","/events"],
        	    ["Announcements", "/announcements"],
        	    ["Products", "/products"],
        	]} />
            <div className="products">
                <WhiteContainer>
			<h1>Our Events</h1>
                </WhiteContainer>
            </div>
        <div className="productsList">
                        {shownProducts.map((product) =>{
                            return (
                            <div className="Item">
                                <h2 className="Title">{product["name"]}</h2>
                                <img src={logo} alt="Invalid" className="ItemPhoto"/>
                                <div>
                                    <p><span className="ProductInfo">Date: </span>{product["date"]}</p>
                                    <p><span className="ProductInfo">Starting Point: </span>{product["start_point"]}</p>
                                    <p><span className="ProductInfo">destination: </span>{product["destination"]}</p>
                                </div>
                        </div>
                            );
                        })}
            </div>
        </>
    );
}

export default UserEventsScreen;
