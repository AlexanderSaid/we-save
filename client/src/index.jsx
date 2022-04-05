import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./AppWrapper";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import { AddressProvider } from "./context/AddressContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <AppWrapper>
    <UserProvider>
      <AddressProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AddressProvider>
    </UserProvider>
  </AppWrapper>,
  document.getElementById("root")
);
