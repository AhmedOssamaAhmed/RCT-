import React from "react";
import TabBar from "../../Components/TabBar/TabBar.js";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer.js";
import "./UserProductsScreen.css";
import { useNavigate } from "react-router-dom";
import logo from '../../Assets/rct-logo.png'
import {get} from "../../Hooks/Network.js";

function UserProductsScreen(){
    // const [products, setProducts] = React.useState([]);
    const navigate = useNavigate();
	const [shownProducts, setShownProducts] = React.useState([]);
    
	React.useEffect(
        () => {
		// get token
		let token = localStorage.getItem("token");
	
		// check to see if token belongs to an adminstrator
		get("is_admin.php", {"Authorization": token}, (response) => {
			// if not an admin go to login screen
			if(response.data.isAdmin === false){
				navigate("/");
			}
		});

		// since user is an admin get products
		get("products.php", {"Authorization": token}, (response) =>{
			setShownProducts(response.data.products);
			console.log(response.data.products);
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
                            <p className="Link" onClick={() => navigate("/Item")}>Item Details</p>
                        </div>
                </div>
                    );
                })}
                    </div>
                    {/* <div className="Item">
                        <h2>Test</h2>
                        <p>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum</p>
                </div>
                    <div className="Item">
                        <p>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum</p>
                </div> */}
            </div>
        // </div>
    );
}

export default UserProductsScreen;
