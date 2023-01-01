import React from "react";
import TabBar from "../../Components/TabBar/TabBar.js";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer.js";
import BlueButton from "../../Components/BlueButton/BlueButton.js";
import AdminTable from "../../Components/AdminTable/AdminTable.js";
import "./AdminAnnouncementsScreen.css";

function AdminAnnouncementsScreen(){
	let [title, setTitle] = React.useState("");
	let [description, setDescription] = React.useState("");
	let [date, setDate] = React.useState("");
	
	function addProduct(){
		let token = localStorage.getItem("token");
		let data = new FormData();
		data.append("title", title);
		data.append("description", description);
		data.append("date", date);
		data.append("user_id", token);
		setTitle("");
		setDate("");
		setDescription("");
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
			name="Announcements"
			addRoute="add_announcement.php"
			deleteRoute="delete_announcement.php"
			getRoute="announcements.php"
			show={["title", "description", "date"]}
			searchBy="title"
			deleteBy="title"
			onAdd={addProduct}
			showAdd={true}
	    	>
			<div>
				<h1>Create Announcement</h1>
				<div className="popup-form-item">
					<label>Title</label>
					<input type="text" className="popup-form-input" onChange={(event) =>{setTitle(event.target.value)}} value={title}/>
				</div>
				<div className="popup-form-item">
					<label>Date</label>
					<input type="date" className="popup-form-input" onChange={(event) =>{setDate(event.target.value)}} value={date}/>
				</div>
				<div className="popup-form-item">
					<label>Description</label>
					<input type="text" className="popup-form-input" onChange={(event) =>{setDescription(event.target.value)}} value={description}/>
				</div>
			</div>
	    	</AdminTable>
        </>
    );
}

export default AdminAnnouncementsScreen;
