import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./AppWrapper";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import { AddressProvider } from "./context/AddressContext";

ReactDOM.render(
  <AppWrapper>
    <AddressProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AddressProvider>
  </AppWrapper>,
  document.getElementById("root")
);
