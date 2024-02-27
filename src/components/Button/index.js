import PropTypes from "prop-types";

import { Button } from "./styles";

export const ButtonApp = ({ children }) => {
  return <Button>{children}</Button>;
};

ButtonApp.propTypes = {
  children: PropTypes.node,
};
