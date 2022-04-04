import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./AppWrapper";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";

ReactDOM.render(
  <AppWrapper>
    <SearchProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </SearchProvider>
  </AppWrapper>,
  document.getElementById("root")
);
