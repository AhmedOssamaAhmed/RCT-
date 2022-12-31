import React from "react";
import './Register.css'
import logo from '../../Assets/rct-logo.png'
import WhiteContainer from "../../Components/WhiteContainer/WhiteContainer";
import TextField from "../../Components/TextField/TextField";
import BlueButton from "../../Components/BlueButton/BlueButton"
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
    
    const [firstname,setFirstName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [verify,setVerify] = React.useState("");
    const [stravaLink,setStravaLink] = React.useState("");
    const [lastName,setLastName] = React.useState("");
    const [phone,setPhone] = React.useState("");
    const [dob, setDOB] = React.useState();
    // const [gender, setGender] = React.useState();
    const [error, setError] = React.useState("");
    function sendData(){
        var data = new FormData();
        data.append('first_name', firstname);
        data.append('email', email);
        data.append('password', password)
        data.append('verify_password', verify)
        data.append('strava_link', stravaLink)
        data.append('last_name', lastName)
        data.append('phone', phone)
        data.append('register', true)
        data.append('gender', 'female')
        data.append("date_of_birth", dob);
        axios.post(`http://172.20.10.7/code/rct/register.php`, data).then((response) =>{
            if(response.data !== "login successful"){
                setError(response.data);
            }
            else{
                console.log("logged in");
                setError("");
            }
    });
}
    return (
        <div className="backGround">
            <div className="Register-landing">
                <div className="Logo">
                    <img src={logo} alt="Tester" className="rctLogo" />
                </div>
                <div className="register-cont">
                    <h2 className="register-title">Register</h2>
                    <span className="error">{error}</span>
                </div>
                <div className="register-container">
                    <div className="TwoColumns">
                        <WhiteContainer>
                            <TextField label="First Name" onChange={(data) => setFirstName(data)}/>
                            <TextField label="Email" type="email"  onChange={(data) => setEmail(data)}/>
                            <TextField label="Password" type="password" onChange={(data) => setPassword(data)}/>
                            <TextField label="Strava Link" onChange={(data) => setStravaLink(data)}/>

                            <div className="gender">
                                <label for="gender" >Gender</label>
                                <br />
                                <input type="radio" value="male" id="male" name="gender" />
                                <label for="male">Male</label>

                                <input type="radio" value="female" id="female" name="gender" />
                                <label for="female">Female</label>
                            </div>
                        </WhiteContainer>
                        <WhiteContainer>
                            <TextField label="Last Name"  onChange={(data) => setLastName(data)}/>
                            <TextField label="Phone" onChange={(data) => setPhone(data)}/>
                            <TextField label="Verify Password" type="password" onChange={(data) => setVerify(data)}/>
                            <TextField label="Date of Birth" type="date" onChange={(data) => setDOB(data)}/>
                        </WhiteContainer>
                    </div>
                    <div className="BlueButton" onClick={() => sendData()}>
                        <BlueButton text="Register" />
                    </div>
                    <div className="LoginLink">
                    <Link to="/">
                        Or Login!
                    </Link>
                                        </div>
                </div>
                
            </div>
        </div>
    )
}

export default Register;
