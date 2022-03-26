import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./AppWrapper";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import { AddressProvider } from "./context/AddressContext";
import { CategoryProvider } from "./context/CategoryContext";

ReactDOM.render(
  <AppWrapper>
    <CategoryProvider>
      <AddressProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AddressProvider>
    </CategoryProvider>
  </AppWrapper>,
  document.getElementById("root")
);
