import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./css/index.css";
// import Baskets from "./pages/Baskets/Baskets";
import Layout from "./components/layout/Layout";
import Results from "./pages/Results/Results";
import SignUp from "./components/SignUp";
import Contact from "./pages/Contact/Contact";
//import ShopDetails from "./pages/ShopDetails/ShopDetails";
import CreateBasket from "./pages/CreateBasket/CreateBasket";

// import SignIn from "./pages/BacharIn";
// import PrivateRoute from "./components/PrivateRoute";
// import RegisterShop from "./pages/RegisterShop";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="results" element={<Results />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="contact" element={<Contact />} />
          <Route path="createBasket" element={<CreateBasket />} />
          {/* <Route path="results/shop-details/:id" element={<ShopDetails />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
