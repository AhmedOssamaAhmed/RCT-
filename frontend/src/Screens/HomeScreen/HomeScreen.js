import axios from "axios";
import React from "react";
import TabBar from "../../Components/TabBar/TabBar";
import AdminEventsScreen from "../AdminEventsScreen/AdminEventsScreen";
import UserHomeScreen from "../UserHomeScreen/UserHomeScreen";

function HomeScreen() {
    const [adminFlag, setAdminFlag] = React.useState(false);
    React.useEffect(() => {
    let token = localStorage.getItem("token");
    axios.post(`http://localhost/code/rct/users.php`,null,{headers: {"Authorization" : token}} ).then((response) =>{
    });
}, [])
    return (
        <div>
            {adminFlag ? <AdminEventsScreen /> : <UserHomeScreen />}
        </div>
    )
}

export default HomeScreen;
