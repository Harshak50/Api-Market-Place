import "./Navbar.css"
import {Link} from "react-router-dom"
import logo from "../../assets/cuvette.svg";
export default function Navbar(props) {
  var loginbtn ="";
   props.login ? loginbtn = "none": loginbtn = "block"
  return (
    <div className="nav-bar">
      <img alt="logo" src={logo} className="img"></img>
      <button className="btn-1 btn"  style={{display:loginbtn}} >+ APIs</button>
    </div>
  );
}
