import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./menuApp/pages/HomePage";
import MenuDetails from "./menuApp/pages/MenuDetails";
import Checkout from "./menuApp/pages/Checkout";
import Finalize from "./menuApp/pages/Finalize";
import Connexion from "./Admin/pages/Connexion";
import ResetPassword from "./Admin/pages/ResetPassword";
import CreateAccount from "./Admin/pages/CreateAccount";
import Dashboard from "./Admin/pages/Dashboard";

const routes = () => {

  return (
    <Routes>
     {/* Users routes */}
      <Route index exact path="/" element={<HomePage />} />
      <Route  exact path="/details/:id" element={<MenuDetails />} />
      <Route  exact path="/checkout" element={<Checkout />} />
      <Route  exact path="/finalize" element={<Finalize />} />

      {/* admin routes */}
      <Route  exact path="/admin/" element={<Connexion />} />
      <Route  exact path="/admin/resetpassword" element={<ResetPassword />} />
      <Route  exact path="/admin/createaccount" element={<CreateAccount />} />
      <Route  exact path="/admin/app" element={<Dashboard />} />

    </Routes>
  );
};

export default routes;
