import "../../App.css";
import "./Dashboard"
import "../Dashboard/Dashboard.css"
import logo from "../../assets/cuvette.svg"
import {Link} from "react-router-dom";
import Dashboard from "./Dashboard";
function Marketplacedb(){
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