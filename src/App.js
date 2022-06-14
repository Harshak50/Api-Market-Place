import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Screens/Auth/Register/Register";
import Marketplacedb from "./Screens/Dashboard/Marketplacedb";
import Home from "./Screens/Home/Home";
import Login from "./Screens/Auth/Login/Login";
import MyApis from "./Screens/MyApis/myApis";
import NewAPI from "./Screens/NewApi/newApi";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marketplacedb />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myapis" element={<MyApis></MyApis>} ></Route>
        <Route path="/newapi" element={<NewAPI></NewAPI>} ></Route>
      </Routes>
    </Router>
  );
}
