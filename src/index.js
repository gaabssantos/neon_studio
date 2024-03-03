import React from "react";
import ReactDOM from "react-dom/client";

import { Navbar } from "./components";
import NavbarContextProvider from "./context/NavbarContext";
import Routes from "./routes/routes";
import { GlobalStyles } from "./styles/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavbarContextProvider>
      <GlobalStyles />
      <Navbar />
      <Routes />
    </NavbarContextProvider>
  </React.StrictMode>,
);
