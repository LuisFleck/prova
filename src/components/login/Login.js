import React from "react";
import { Route, Routes } from 'react-router-dom';
import LoginForm from "./LoginForm";
import './login.css';
import Admin from "../body/adm/Admin";
import User from "../body/user/User";

const Login = () => {

  return (

    <div>
        <Routes>
            <Route path="/*" element={<LoginForm/>}/>
            <Route path="adm" element={<Admin/>}/>
            <Route path="user" element={<User/>}/>
        </Routes>
    </div>
  );
};

export default Login;
