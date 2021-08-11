import React from "react";
import PropTypes from "prop-types";

function DashboardLayout({ children }) {
  return <>{children}</>;
}

export default DashboardLayout;

DashboardLayout.propTypes = {
  children: PropTypes.element,
};
