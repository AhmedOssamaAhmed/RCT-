import React from "react";
import TabBar from "../../Components/TabBar/TabBar.js";
import "./UserProductsScreen.css";
import { useNavigate } from "react-router-dom";
import logo from '../../Assets/rct-logo.png'
import ViewingBlock from "../../Components/ViewingBlock/ViewingBlock.js";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer.js";
import {get} from "../../Hooks/Network.js";

function UserProductsScreen(){
    const navigate = useNavigate();

    // const [products, setProducts] = React.useState([]);
    
	const [shownProducts, setShownProducts] = React.useState([]);
    
    React.useEffect(
        () => {
            let token = localStorage.getItem("token");
            get("products.php", {"Authorization": token}, (response) => {
                setShownProducts(response.data.products);

            });
        },[]);

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
                        {shownProducts.map((product) =>{
                            return (
                            <div className="Item">
                                <h2 className="Title">{product["name"]}</h2>
                                <img src={logo} alt="Invalid" className="ItemPhoto"/>
                                <div>
                                    <p><span className="ProductInfo">Price: </span>{product["price"]}</p>
                                    <p><span className="ProductInfo">Quantities left: </span>{product["quantity"]}</p>
                                    <p className="Link" onClick={() => navigate("")}>Item Details</p>
                                </div>
                        </div>
                            );
                        })}
                            </div>
            </div>
    );
}

export default UserProductsScreen;
