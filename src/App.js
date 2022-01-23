import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './Screens/Dashboard/Dashboard';
import Login from  "./Screens/Auth/Login/Login"
import "./Routes/Routes" ;
import Register from "./Screens/Auth/Register/Register";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login" >Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li> <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}


