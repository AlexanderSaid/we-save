import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./AppWrapper";
import App from "./App";
import { Routes, Route } from "react-router-dom";

ReactDOM.render(
  <AppWrapper>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </AppWrapper>,
  document.getElementById("root")
);
