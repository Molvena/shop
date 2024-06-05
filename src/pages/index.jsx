import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/home/index";
import {LoginPage} from "../pages/LoginPage";
import {ProfilePage} from "../pages/ProfilePage";
import {SettingPage} from "../pages/SettingPage";
import {SignUpPage} from "../pages/SignUpPage";

import {HomeLayout} from "../components/user/HomeLayout";
import {ProtectedLayout} from "../components/user/ProtectedLayout.jsx";


export default function PagesRoutes() {
  return (
    <Routes>
      <Route element = {<HomeLayout/>}> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Route>  

      <Route path='/dashboard' element={<ProtectedLayout />}>
        <Route path='profile' element={<ProfilePage />} />
        <Route path='settings' element={<SettingPage />} />
      </Route> 
    </Routes>
  );
}

