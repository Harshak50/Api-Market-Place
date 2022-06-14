import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
export default function Navbar(props) {
  var loginbtn ="";
   props.login ? loginbtn = "none": loginbtn = "block"
   const navigate = useNavigate();
   const logoutHandler = ()=>{
     localStorage.clear();
     navigate('/')
   }

   const myApiHandler = ()=>{
    navigate('/myapis')
   }
   const createApiHandler=()=>{
    navigate('/newapi')
   }
  
  return (
    <div className="nav-bar">
      <img alt="logo" src={logo} className="img"></img>
      <div className="btn-row">
      <button className="btn-2 btn"  style={{display:loginbtn}} onClick={createApiHandler}>Create Api +</button>
      <button className="btn-1 btn"  style={{display:loginbtn}} onClick={myApiHandler}>My APIs</button>
      <button className="btn-1 btn" style={{display: loginbtn}} onClick={logoutHandler}  type="submit">Logout</button><br/>
      </div>
    </div>
  );
}

