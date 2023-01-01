import React from "react";
import TabBar from "../../Components/TabBar/TabBar.js";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer.js";
import BlueButton from "../../Components/BlueButton/BlueButton.js";
import "./AdminProductsScreen.css";
import { useNavigate } from "react-router-dom";
import {get} from "../../Hooks/Network.js";

function AdminProductsScreen(){
	const navigate = useNavigate();
	const [products, setProducts] = React.useState([]);
	const [shownProducts, setShownProducts] = React.useState([]);

	React.useEffect(
	() => {
		// get token
		let token = localStorage.getItem("token");
	
		// check to see if token belongs to an adminstrator
		get("is_admin.php", {"Authorization": token}, (response) => {
			// if not an admin go to login screen
			if(response.data.isAdmin == false){
				navigate("/");
			}
		});

		// since user is an admin get products
		get("products.php", {"Authorization": token}, (response) =>{
			setShownProducts(response.data.products);
			setProducts(response.data.products);
		});
	},[]);

	function search(subStr){
		let newProdList = [];
		for(let i=0; i < products.length; i++){
			let currStr = String(products[i]["name"]);
			if(currStr.toLowerCase().includes(subStr)){
				newProdList.push(products[i]);
			}
		}
		setShownProducts(newProdList);
	}

    return(
        <>
            <TabBar links={[
                ["Manage Admins", "/admin/users"],
                ["Manage Events", "/admin/events"],
                ["Manage Announcements", "/admin/announcements"],
                ["Manage Products", "/admin/products"],
            ]} />
            <div className="admin-content">
                <WhiteContainer>
                    <div className="admin-content-top">
                        <h1>Products</h1>
                        <div className="admin-actions">
                            <input className="search" type="text" onChange={(event) => {search(event.target.value);}}/>
                            <BlueButton text="+ Add" />
                        </div>
                    </div>
					{shownProducts.map((product, i) => {
						return (
                    		<div className="data-row">
								<div>
                    		    	<span className="data-row-element">{product["name"]}</span>
                    		    	<span className="data-row-element">{product["price"]}</span>
                    		    	<span className="data-row-element">{product["quantity"]}</span>
									</div>
								<div className="data-row-actions">
									<BlueButton text="Edit"/>
									<BlueButton bgColor="red" text="Delete" onClick={function(){console.log("delete");}}/>
								</div>
                    		</div>
						);
					})}
                </WhiteContainer>
            </div> 
        </>
    );
}

export default AdminProductsScreen;
