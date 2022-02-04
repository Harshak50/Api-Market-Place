import "./Login.css"
import axios from "axios";
import "../../../App.css"
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function LoginForm(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const Navigate = useNavigate();

 
    return (
        <div className="form">
           <p>Login to your account</p>
    <form >
            <input className="inputs" type="email" placeholder="Email address" ></input><br/>
            <input className="inputs" type="password" placeholder="Password"></input>
            <Link to ="/home"> 
            <button className="btn-1 login-btn inputs"  type="submit">Sign In</button><br/>
            </Link>
            <Link to = "/register" style={{textDecoration:"none"}}>
            <p style={{display:"inline"}}>New User ?</p><button className="btn-2 register-btn"  type="submit">Sign Up</button>
            </Link>
    </form>
    </div>

    );
}

export default LoginForm;