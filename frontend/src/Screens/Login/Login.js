import React from "react";
import axios from "axios";
import "./Login.css";
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer";
import logo from '../../Assets/rct-logo.png'
import TextField from "../../Components/TextField/TextField";
import BlueButton from "../../Components/BlueButton/BlueButton"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [error,setError] = React.useState("");
    function sendData(){
        var data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('submit', true)
        axios.post(`http://172.20.10.7/code/rct/login.php`, data).then((response) =>{
        if(!response.data.success){
            setError(response.data);
            console.log("response Not Login Successful");
            console.log(response.data.success)
            console.log("response Not Login Successful");
        }
        else{
            console.log(response.data);
            console.log("response Logged in");
            setError("");
            localStorage.setItem("token",response.data.token)
            navigate("/HomeScreen");
        }
    });
    }
    return (
        <div className="backGround">
            <div className="Login-Landing">
                <div className="Logo">
                    <img src={logo} alt="Tester"  className="rctLogo"  />
                </div>
                <div className="login-center-cont">
                    <h2 className="login-title">Login</h2>
                    <span className="error">{error}</span>
                </div>
                <div className="login-container">
                    <WhiteContainer>
                        <TextField label="Email" onChange={(data) => setEmail(data)}/>
                        <TextField label="Password" onChange={(data) => setPassword(data)}/>
                        <div to="/HomeScreen" className="BlueButton" onClick={() => sendData()}>
                            <BlueButton text="Login"/>
                        </div>
                        
                        <div className="RegisterLink">
                    <Link to="/Register">
                        Or Register!
                    </Link>
                    </div>
                    </WhiteContainer>
                </div>
            </div>
        </div>
    )
}

export default Login;