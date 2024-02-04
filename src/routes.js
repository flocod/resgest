import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./menuApp/pages/HomePage";
import MenuDetails from "./menuApp/pages/MenuDetails";

const routes = () => {

  return (
    <Routes>
      <Route index exact path="/" element={<HomePage />} />
      <Route index exact path="/details/:id" element={<MenuDetails />} />
    </Routes>
  );
};

export default routes;
