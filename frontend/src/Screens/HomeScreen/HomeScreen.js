import axios from "axios";
import React from "react";
import TabBar from "../../Components/TabBar/TabBar";
import AdminHomeScreen from "../AdminHomeScreen/AdminHomeScreen";
import UserHomeScreen from "../UserHomeScreen/UserHomeScreen";
// import { Link } from "react-router-dom";

function HomeScreen() {
    const [adminFlag, setAdminFlag] = React.useState(false);
    React.useEffect(() => {
    let token = localStorage.getItem("token");
    axios.post(`http://localhost/code/rct/users.php`,null,{headers: {"Authorization" : token}} ).then((response) =>{
    });
}, [])
    return (
        <div>
            {adminFlag ? <AdminHomeScreen /> : <UserHomeScreen />}
        </div>
    )
}

export default HomeScreen;
