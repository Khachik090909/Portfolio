import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import { UserContextProvider } from "./contexte/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserContextProvider>
    <RouterProvider router={App} />
  </UserContextProvider>
);
