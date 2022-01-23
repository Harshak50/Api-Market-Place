import "./Navbar.css"
import logo from "../../assets/cuvette.svg";
export default function Navbar() {
  return (
    <div className="nav-bar">
      <img alt="logo" src={logo} className="img"></img>
      <button className="btn-1 btn">Login / Signup</button>
    </div>
  );
}
