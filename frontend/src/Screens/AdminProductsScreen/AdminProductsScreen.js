import React from "react";
import TabBar from "../../Components/TabBar/TabBar.js";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer.js";
import BlueButton from "../../Components/BlueButton/BlueButton.js";
import "./AdminProductsScreen.css";

function AdminProductsScreen(){

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
                            <input className="search" type="text"/>
                            <BlueButton text="+ Add" />
                        </div>
                    </div>
                    <div className="data-row">
                        <span className="data-row-element">Ahmed Ossama</span>
                        <span className="data-row-element">ahmedossamaahmed@gmail.com</span>
                        <span className="data-row-element">User</span>
                    </div>
                </WhiteContainer>
            </div> 
        </>
    );
}

export default AdminProductsScreen;
