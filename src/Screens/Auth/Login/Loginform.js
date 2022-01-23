import "./Login.css"
import "../../../App.css"
function LoginForm(){
    return (
        <div className="form">
           <p>Login to your account</p>
    <form>
            <input className="inputs" type="email" placeholder="Email address"></input><br/>
            <input className="inputs" type="password" placeholder="Password"></input>
            <button className="btn-1 login-btn inputs" type="submit">Sign In</button><br/>
            <p style={{display:"inline"}}>New User ?</p><button className="btn-2 register-btn"  type="submit">Sign Up</button>
    </form>
    </div>

    );
}

export default LoginForm;