import Navbar from "../../../components/Navbar/Navbar";
import LoginForm from "./Loginform";
export default function Login() {
  return( <>
 <Navbar login="true"></Navbar>
  <div className="login">
      <div className="login-intro">
          <h2>Welcome to your <br></br>Dashboard</h2>
          <p>Your uploaded APIs will be<br></br>
              displayed here once you login to your<br></br>
              account
          </p>
      </div>
      <LoginForm></LoginForm>

  </div>
  </>
  );
}
