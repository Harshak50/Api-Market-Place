import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from '../Screens/Dashboard/Dashboard';
import Login from  "../Screens/Auth/Login/Loginform"
export default function Navigation(){
    return(
<Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </Router>);
}
