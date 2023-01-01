import React from "react";
import TabBar from "../../Components/TabBar/TabBar.js";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer.js";
import BlueButton from "../../Components/BlueButton/BlueButton.js";
import "./AdminProductsScreen.css";
import { useNavigate } from "react-router-dom";
import {get, post} from "../../Hooks/Network.js";

function AdminProductsScreen(){
	const navigate = useNavigate();
	const [products, setProducts] = React.useState([]);
	const [shownProducts, setShownProducts] = React.useState([]);
	const [refresh, setRefresh] = React.useState(false);
	const inputRef = React.useRef(null);

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
	},[]);

	React.useEffect(() => {
		// get token
		let token = localStorage.getItem("token");

		// since user is an admin get products
		get("products.php", {"Authorization": token}, (response) =>{
			setProducts(response.data.products);
			if(inputRef.current.value == null || inputRef.current.value == ""){
				setShownProducts(response.data.products);
			}else{
				search(inputRef.current.value, response.data.products);
			}
		});
	},[refresh]);

	function search(subStr, list=products){
		let newProdList = [];
		for(let i=0; i < list.length; i++){
			let currStr = String(list[i]["name"]);
			if(currStr.toLowerCase().includes(subStr)){
				newProdList.push(list[i]);
			}
		}
		setShownProducts(newProdList);
	}

	function deleteProduct(id){
		// get token
		let token = localStorage.getItem("token");
		// send delete request
        var data = new FormData();
		data.append("cols", "id");
		data.append("value", id);
		post("delete_product.php", data, {"Authorization": token}, ()=>{
			setRefresh(!refresh);
		});
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
                            <input ref={inputRef} className="search" type="text" onChange={(event) => {search(event.target.value);}}/>
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
									<BlueButton bgColor="red" text="Delete" onClick={() => {deleteProduct(product["id"]);}}/>
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
