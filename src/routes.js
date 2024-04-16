// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import HomePage from "./menuApp/pages/HomePage";
// import MenuDetails from "./menuApp/pages/MenuDetails";
// import Checkout from "./menuApp/pages/Checkout";
// import Finalize from "./menuApp/pages/Finalize";
// import Connexion from "./Admin/pages/Connexion";
// import ResetPassword from "./Admin/pages/ResetPassword";
// import CreateAccount from "./Admin/pages/CreateAccount";
// import Dashboard from "./Admin/pages/Dashboard";
// import Orders from "./Admin/pages/Orders";
// import Menus from "./Admin/pages/Menus";
// import AddMenus from "./Admin/pages/AddMenus";
// import Categories from "./Admin/pages/Categories";
// import Sales from "./Admin/pages/Sales";
// import Admin from "./Admin/pages/Admin";
// import Settings from "./Admin/pages/Settings";
// const routes = () => {

//   return (
//     <Routes>
//      {/* Users routes */}
//       <Route index exact path="/" element={<HomePage />} />
//       <Route  exact path="/details/:id" element={<MenuDetails />} />
//       <Route  exact path="/checkout" element={<Checkout />} />
//       <Route  exact path="/finalize" element={<Finalize />} />

//       {/* admin routes */}
//       <Route  exact path="/admin/" element={<Connexion />} />
//       <Route  exact path="/admin/resetpassword" element={<ResetPassword />} />
//       <Route  exact path="/admin/createaccount" element={<CreateAccount />} />
//       <Route  exact path="/admin/app/" element={<Dashboard />} />
//       <Route  exact path="/admin/app/dashboard" element={<Dashboard />} />
//       <Route  exact path="/admin/app/orders" element={<Orders />} />
//       <Route  exact path="/admin/app/menus" element={<Menus />} />
//       <Route  exact path="/admin/app/menus/addmenus" element={<AddMenus />} />
//       <Route  exact path="/admin/app/categories" element={<Categories />} />
//       <Route  exact path="/admin/app/sales" element={<Sales />} />
//       <Route  exact path="/admin/app/admin" element={<Admin />} />
//       <Route  exact path="/admin/app/settings" element={<Settings />} />

//     </Routes>
//   );
// };

// export default routes;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./menuApp/pages/HomePage";
import MenuDetails from "./menuApp/pages/MenuDetails";
import Checkout from "./menuApp/pages/Checkout";
import Finalize from "./menuApp/pages/Finalize";
import Connexion from "./Admin/pages/Connexion";
import ResetPassword from "./Admin/pages/ResetPassword";
import CreateAccount from "./Admin/pages/CreateAccount";
import Dashboard from "./Admin/pages/Dashboard";
import Orders from "./Admin/pages/Orders";
import Menus from "./Admin/pages/Menus";
import AddMenus from "./Admin/pages/AddMenus";
import Categories from "./Admin/pages/Categories";
import Sales from "./Admin/pages/Sales";
import Admin from "./Admin/pages/Admin";
import Settings from "./Admin/pages/Settings";

const routes = () => {
  const currentUser = localStorage.getItem("CurrentUser");

  return (
    <Routes>
      {/* Users routes */}
      <Route index exact path="/" element={<HomePage />} />
      <Route exact path="/details/:id" element={<MenuDetails />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/finalize" element={<Finalize />} />

      <Route exact path="/admin/" element={<Connexion />} />
      <Route exact path="/admin/resetpassword" element={<ResetPassword />} />
      <Route exact path="/admin/createaccount" element={<CreateAccount />} />
      
       {/*User connected routes */}
      {currentUser ? (
        <>
          <Route exact path="/admin/app/" element={<Dashboard />} />
          <Route exact path="/admin/app/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/app/orders" element={<Orders />} />
          <Route exact path="/admin/app/menus" element={<Menus />} />
          <Route
            exact
            path="/admin/app/menus/addmenus"
            element={<AddMenus />}
          />
          <Route exact path="/admin/app/categories" element={<Categories />} />
          <Route exact path="/admin/app/sales" element={<Sales />} />
          <Route exact path="/admin/app/admin" element={<Admin />} />
          <Route exact path="/admin/app/settings" element={<Settings />} />
        </>
      ) : (
        <Route path="/admin/app/*" element={<Navigate to="/admin" replace />} />
      )}
    </Routes>
  );
};

export default routes;
