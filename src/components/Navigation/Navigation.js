import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import AuthRoute from "./AuthRoute";

function Navigation() {
  const { isLoggedIn } = useSelector((state) => state.Staff);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={isLoggedIn ? <Home /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navigation;
