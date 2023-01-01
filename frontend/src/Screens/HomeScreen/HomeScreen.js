import axios from "axios";
import React from "react";
import TabBar from "../../Components/TabBar/TabBar";
import AdminHomeScreen from "../AdminHomeScreen/AdminHomeScreen";
import UserHomeScreen from "../UserHomeScreen/UserHomeScreen";
import {get, post} from "../../Hooks/Network.js";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
    const navigate=useNavigate()
    const [adminFlag, setAdminFlag] = React.useState(false);
    React.useEffect(() => {
    let token = localStorage.getItem("token");
    get("is_admin.php", {"Authorization": token}, (response) => {
        // if not an admin go to login screen
        setAdminFlag(response.data.isAdmin)
    });
},[]);
    return (
        <div>
            {adminFlag ? <AdminHomeScreen /> : <UserHomeScreen />}
        </div>
    )
}

export default HomeScreen;
