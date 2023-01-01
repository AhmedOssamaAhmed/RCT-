import React from "react";
import TabBar from "../../Components/TabBar/TabBar.js";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer.js";
import BlueButton from "../../Components/BlueButton/BlueButton.js";
import AdminTable from "../../Components/AdminTable/AdminTable.js";
import "./AdminUsersScreen.css";

function AdminUsersScreen(){
	let [name, setName] = React.useState("");
	let [startPoint, setStart] = React.useState("");
	let [destination, setDestination] = React.useState("");
	let [date, setDate] = React.useState("");
	let [distance, setDistance] = React.useState("");
	
	function addProduct(){}

	function onEdit(){
		console.log("edit");
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
			name="Users"
			deleteRoute="delete_user.php"
			getRoute="users.php"
			show={["first_name", "last_name", "role", "email"]}
			searchBy="email"
			onAdd={addProduct}
			onEdit={onEdit}
			showAdd={false}
			editLabel="Make Admin"
	    	>
			<div>
				<h1>Create Product</h1>
				<div className="popup-form-item">
					<label>Name</label>
					<input type="text" className="popup-form-input" onChange={(event) =>{setName(event.target.value)}} value={name}/>
				</div>
				<div className="popup-form-item">
					<label>Start Point</label>
					<input type="text" className="popup-form-input" onChange={(event) =>{setStart(event.target.value)}} value={startPoint}/>
				</div>
				<div className="popup-form-item">
					<label>Destination</label>
					<input type="text" className="popup-form-input" onChange={(event) =>{setDestination(event.target.value)}} value={destination}/>
				</div>
				<div className="popup-form-item">
					<label>Date</label>
					<input type="date" className="popup-form-input" onChange={(event) =>{setDate(event.target.value)}} value={date}/>
				</div>
				<div className="popup-form-item">
					<label>Distance</label>
					<input type="text" className="popup-form-input" onChange={(event) =>{setDistance(event.target.value)}} value={distance}/>
				</div>
			</div>
	    	</AdminTable>
        </>
    );
}

export default AdminUsersScreen;
