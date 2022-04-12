import React from "react";
import ReactDOM from "react-dom";
import "./css/input-autofill.css";
import "./css/scrollbar.css";
import AppWrapper from "./AppWrapper";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import { SignInProvider } from "./context/SignInContext";

import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <AppWrapper>
    <SignInProvider>
      <UserProvider>
        <SearchProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </SearchProvider>
      </UserProvider>
    </SignInProvider>
  </AppWrapper>,
  document.getElementById("root")
);
