import "../../App.css";
import "./Dashboard"
import "../Dashboard/Dashboard.css"
import React, {useEffect } from "react";
import logo from "../../assets/logo.png"
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
function Marketplacedb(){
  let navigate = useNavigate();
  useEffect(() => {
    const logged = localStorage.getItem("accessToken");
    if (logged) {
      navigate("/home");
    }
  });
    return(
      <>
        <div className="nav-bar">
        <img alt="logo" src={logo} className="img"></img>
        <Link to = "/login">
        <button className="btn-1 btn">Login / Signup</button>
        </Link>
      </div>
      <Dashboard></Dashboard>
      </>
    );
}
export default Marketplacedb;