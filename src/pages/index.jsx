import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./home";
import {LoginPage} from "./LoginPage";

export default function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<LoginPage />} />
    </Routes>
  );
}
