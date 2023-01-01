import axios from "axios";
import React from "react";
import TabBar from "../../Components/TabBar/TabBar";
import AdminHomeScreen from "../AdminHomeScreen/AdminHomeScreen";
import UserHomeScreen from "../UserHomeScreen/UserHomeScreen";
// import { Link } from "react-router-dom";

function HomeScreen() {
    const [token, setToken] = React.useState(null);
    const [adminFlag, setAdminFlag] = React.useState(false);
    React.useEffect(() => {
    setToken(localStorage.getItem("token"))    
    console.log("Tester")
    axios.post(`http://172.20.10.7/code/rct/users.php`,null,{headers: {"Authorization" : token}} ).then((response) =>{
        if(response.data){
            // setError(response.data);
            console.log("response Not Login Successful");
            console.log(response.data)
            console.log("response Not Login Successful");
        }
        else{
            console.log(response.data);
            console.log("response Logged in");
            // setError("");
        }
        console.log(response);
        console.log("response");
    });
    console.log("Tester2")
}, [])
    return (
        <div>
            {adminFlag ? <AdminHomeScreen /> : <UserHomeScreen />}
        </div>
    )
}

export default HomeScreen;
