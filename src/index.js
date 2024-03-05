import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components";
import NavbarContextProvider from "./context/NavbarContext";
import Routes from "./routes/routes";
import { GlobalStyles } from "./styles/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavbarContextProvider>
      <GlobalStyles />
      <Navbar />
      <Routes />
    </NavbarContextProvider>
  </BrowserRouter>,
);
