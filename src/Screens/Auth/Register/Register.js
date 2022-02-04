import Navbar from "../../../components/Navbar/Navbar";
import "../Register/Register.css"
export default function Register(){
return(
    <>
    <Navbar login="true"></Navbar>
    <div className="registerform">
    <p>Please register your account</p>
<form>
     <input className="inputs" type="fname" placeholder="First name"></input><br/>
     <input className="inputs" type="lname" placeholder="Last name"></input><br/>
     <input className="inputs" type="email" placeholder="Email address"></input><br/>
     <input className="inputs" type="password" placeholder="Password"></input>
     <button className="btn-1 register-btn inputs" type="submit">Register</button><br/>
</form>
</div>
</>
);
}