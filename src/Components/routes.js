import {Routes,Route } from "react-router-dom";
import User from "./User/Users/user";
import FrameRegister from "./Frame-Register/Frame-Register";
import FrameLogin from "./Frame-Login/FrameLogin";
import EditUser from "./User/Users/edituser";
import Admin from "./User/Admin/admin";

const Routess = (props) => {
    return (
    <div>
        <Routes> 
            <Route path="/" element={<FrameRegister/>}></Route>
            <Route path="login" element={<FrameLogin/>}></Route>
            <Route path="register" element={<FrameRegister/>}></Route>
            <Route path="/user" element={<User/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/edituser" element={<EditUser/>}></Route>

        </Routes>
    </div>
    );
}
 
export default Routess;