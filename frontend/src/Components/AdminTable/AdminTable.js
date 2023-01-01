import React from "react";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer.js";
import BlueButton from "../../Components/BlueButton/BlueButton.js";
import "./AdminTable.css";
import { useNavigate } from "react-router-dom";
import {get, post} from "../../Hooks/Network.js";
import Popup from "../../Components/Popup/Popup.js";

// Params
// deleteRoute
// addRoute
// getRoute
// name
// children -> popup

function AdminTable(props){
	const navigate = useNavigate();
	const [products, setProducts] = React.useState([]);
	const [shownProducts, setShownProducts] = React.useState([]);
	const [refresh, setRefresh] = React.useState(false);
	const inputRef = React.useRef(null);
	const [deleteBy, setDeleteBy] = React.useState("id");

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

		if(props.deleteBy){
			setDeleteBy(props.deleteBy);
		}
	},[]);

	React.useEffect(() => {
		// get token
		let token = localStorage.getItem("token");

		// since user is an admin get products
		get(props.getRoute, {"Authorization": token}, (response) =>{
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
		let searchBy = "name";
		if(props.searchBy){
			searchBy = props.searchBy;
		}
		for(let i=0; i < list.length; i++){
			let currStr = String(list[i][searchBy]);
			if(currStr.toLowerCase().includes(subStr)){
				newProdList.push(list[i]);
			}
		}
		setShownProducts(newProdList);
	}

	function addProduct(){
		// get token
		let token = localStorage.getItem("token");
		let data = props.onAdd();
		post(props.addRoute, data, {"Authorizatin":token}, (response)=>{
			setRefresh(!refresh);
		});
	}

	function deleteProduct(id){
		// get token
		let token = localStorage.getItem("token");
		// send delete request
		let data = new FormData();
		data.append("cols", deleteBy);
		data.append("value", id);
		post(props.deleteRoute, data, {"Authorization": token}, ()=>{
			setRefresh(!refresh);
		});
	}

    return(
        <>
            <div className="admin-content">
                <WhiteContainer>
                    <div className="admin-content-top">
                        <h1>{props.name}</h1>
                        <div className="admin-actions">
                            <input ref={inputRef} className="search" type="text" onChange={(event) => {search(event.target.value);}}/>
				{props.showAdd ?
							<Popup name="+ Add" actionBtnLabel={"Add " + props.name} onActionBtnClick={addProduct}>
								{props.children}
							</Popup> : <></>}
                        </div>
                    </div>
					{shownProducts.map((product, i) => {
						return (
                    		<div className="data-row">
								<div>
									{props.show.map((col) =>{
										return(
                    		    			<span className="data-row-element">{product[col]}</span>
										);
									})}
									</div>
								<div className="data-row-actions">
									<BlueButton text={props.editLabel ? props.editLabel : "Edit"}/>
									<BlueButton bgColor="red" text="Delete" onClick={() => {deleteProduct(product[deleteBy]);}}/>
								</div>
                    		</div>
						);
					})}
                </WhiteContainer>
            </div> 
        </>
    );
}

export default AdminTable;
