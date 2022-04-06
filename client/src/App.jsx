import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./css/index.css";
import Layout from "./components/layout/Layout";
import Results from "./pages/Results/Results";
import SignUp from "./components/SignUp";

// import SignIn from "./pages/BacharIn";
// import PrivateRoute from "./components/PrivateRoute";
// import RegisterShop from "./pages/RegisterShop";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="login" element={<SignIn />} />
        <Route path="/register" element={<PrivateRoute />}>
          <Route path="/register" element={<RegisterShop />} />
        </Route> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="results" element={<Results />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
