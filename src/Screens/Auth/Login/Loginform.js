import "./Login.css";
import axios from "axios";
import "../../../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
var Spinner = require("react-spinkit");
function LoginForm() {
  let navigate = useNavigate();
  useEffect(() => {
    const logged = localStorage.getItem("accessToken");
    if (logged) {
      navigate("/home");
    }
  });

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: false,
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };


  const loginHandler = async (event) => {
    event.preventDefault();
    if (user.email !== "" || user.password !== "") {
      setLoading(true);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setUser({ user, loading: false });
        console.log(user);
        const { data } = await axios.post(
          "http://authjwtexpress.herokuapp.com/users/login",
          {
            email: user.email,
            password: user.password,
          },
          config
        );
        setLoading(false);
        console.log(data.token);
        if (data.auth === true) {
          if ("token" in data) {
            localStorage.setItem("accessToken", data.token);
            localStorage.setItem("userInfo", JSON.stringify(user.email));
          }
          navigate("/home");
        }
        setUser({ loading: false });
        if (data.auth === false) {
          alert(data.message);
        }
      } catch (error) {
        setLoading(false);
        alert(error.require.data.message);
      }
      setUser({
        fullname: "",
        email: "",
        password: "",
        error: "",
      });
    } else {
      alert("Enter the email and password");
    }
  };

  return (
    <div className="form">
      <p>Login to your account</p>
      <form>
        <input
          className="inputs"
          name="email"
          type="email"
          onChange={onChangeHandler}
          value={user.email}
          placeholder="Email address"
        ></input>
        <br />
        <input
          className="inputs"
          name="password"
          type="password"
          onChange={onChangeHandler}
          value={user.password}
          placeholder="Password"
        ></input>

        <button
          className="btn-1 login-btn inputs"
          onClick={loginHandler}
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
              Sign In
            </p>
          )}
        </button>
        <br />

        <Link to="/register" style={{ textDecoration: "none" }}>
          <p style={{ display: "inline" }}>New User ?</p>
          <button className="btn-2 register-btn" type="submit">
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
