import Navbar from "../../../components/Navbar/Navbar";
import "../Register/Register.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
var Spinner = require("react-spinkit");
export default function Register() {
    let navigate = useNavigate(); 
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const newdata = { ...user, [name]: value };
        setUser(newdata);
    };
    const onRegisterHandler = async (event) => {
        event.preventDefault();
        if (user.email !== "" || user.password !== "" || user.fname !== "" || user.fname  !== "") {
        console.log(user)
        setLoading(true);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            console.log(user);
            const { data } = await axios.post(
                "https://authjwtexpress.herokuapp.com/users/register",
                {
                    fname: user.fname,
                    lname: user.lname,
                    email: user.email,
                    password: user.password,
                },
                config
            );
            console.log(data);
            setLoading(false);
            if (data.message) {
                alert(data.message);
                navigate("/login");
            }
        } catch (error) {
            setLoading(false);
            alert("Somethiing went wrong. Please try again");
        }
    }else{
        alert("Please enter valid details")
    }
    };

    return (
        <>
            <Navbar login="true"></Navbar>
            <div className="registerform">
                <p>Please register your account</p>
                <form>
                    <input
                        className="inputs"
                        name="fname"
                        type="fname"
                        onChange={onChangeHandler}
                        value={user.fname}
                        placeholder="First name"
                    ></input>
                    <br />
                    <input
                        className="inputs"
                        name="lname"
                        onChange={onChangeHandler}
                        value={user.lname}
                        placeholder="Last name"
                    ></input>
                    <br />
                    <input
                        className="inputs"
                        name="email"
                        onChange={onChangeHandler}
                        value={user.email}
                        type="email"
                        placeholder="Email address"
                    ></input>
                    <br />
                    <input
                        className="inputs"
                        name="password"
                        onChange={onChangeHandler}
                        value={user.password}
                        type="password"
                        placeholder="Password"
                    ></input>
                    <button
                        className="btn-1 register-btn inputs"
                        onClick={onRegisterHandler}
                        type="submit"
                    >
                        {loading ? (
                            <Spinner
                                name="three-bounce"
                                color="#fff"
                                style={{ margin: "auto", transform: "scale(0.5)" }}
                            />
                        ) : (
                            <p className="login-label" style={{ color: "#fff" }}>
                                {" "}
                                Sign Up
                            </p>
                        )}
                    </button>
                    <br />
                </form>
            </div>
        </>
    );
}
