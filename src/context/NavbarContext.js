import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const NavbarContext = createContext();

const NavbarContextProvider = ({ children }) => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <NavbarContext.Provider value={{ showIcons, setShowIcons }}>
      {children}
    </NavbarContext.Provider>
  );
};

NavbarContextProvider.propTypes = {
  children: PropTypes.node,
};

export default NavbarContextProvider;
