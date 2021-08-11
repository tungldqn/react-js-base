import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { checkIsAuth } from "../utils/auth";

const PrivateRoute = ({ path, component: Component, layout: Layout }) => {
  const routeRender = (props) => {
    if (!checkIsAuth()) {
      return <Redirect exact to="/login" />;
    } else {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }
  };

  return <Route exact path={path} render={routeRender} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.elementType,
  layout: PropTypes.elementType,
  userFeature: PropTypes.string,
};
