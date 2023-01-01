import React from "react";
import TabBar from "../../Components/TabBar/TabBar.js";
import AdminTable from "../../Components/AdminTable/AdminTable.js";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer.js";
import BlueButton from "../../Components/BlueButton/BlueButton.js";
import "./AdminProductsScreen.css";

function AdminProductsScreen(){
	let [name, setName] = React.useState("");
	let [quantity, setQuantity] = React.useState("");
	let [price, setPrice] = React.useState("");
	
	function addProduct(){
		let data = new FormData();
		data.append("name", name);
		data.append("quantity", quantity);
		data.append("price", price);
		setName("");
		setQuantity("");
		setPrice("");
		return data;
	}

    return(
        <>
            <TabBar links={[
                ["Manage Admins", "/admin/users"],
                ["Manage Events", "/admin/events"],
                ["Manage Announcements", "/admin/announcements"],
                ["Manage Products", "/admin/products"],
            ]} />
			<AdminTable
			showAdd={true}
			name="Products"
			addRoute="add_product.php"
			deleteRoute="delete_product.php"
			getRoute="products.php"
			show={["name", "quantity", "price"]}
			onAdd={addProduct}
	    	>
			<div>
				<h1>Create Product</h1>
				<div className="popup-form-item">
					<label>Name</label>
					<input type="text" className="popup-form-input" onChange={(event) =>{setName(event.target.value)}} value={name}/>
				</div>
				<div className="popup-form-item">
					<label>Quantity</label>
					<input type="text" className="popup-form-input" onChange={(event) =>{setQuantity(event.target.value)}} value={quantity}/>
				</div>
				<div className="popup-form-item">
					<label>Price</label>
					<input type="text" className="popup-form-input" onChange={(event) =>{setPrice(event.target.value)}} value={price}/>
				</div>
			</div>
	    	</AdminTable>
        </>
    );
}

export default AdminProductsScreen;
