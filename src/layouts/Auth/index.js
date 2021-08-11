import React from "react";
import PropTypes from "prop-types";

function AuthLayout({ children }) {
  return <>{children}</>;
}

export default AuthLayout;

AuthLayout.propTypes = {
  children: PropTypes.element,
};
