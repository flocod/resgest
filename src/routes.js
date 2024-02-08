import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./menuApp/pages/HomePage";
import MenuDetails from "./menuApp/pages/MenuDetails";
import Checkout from "./menuApp/pages/Checkout";
import Finalize from "./menuApp/pages/Finalize";

const routes = () => {

  return (
    <Routes>
      <Route index exact path="/" element={<HomePage />} />
      <Route index exact path="/details/:id" element={<MenuDetails />} />
      <Route index exact path="/checkout" element={<Checkout />} />
      <Route index exact path="/finalize" element={<Finalize />} />
    </Routes>
  );
};

export default routes;
