import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { checkIsAuth } from "../utils/auth";

const PublicRoute = ({
  path,
  component: Component,
  layout: Layout,
  restricted,
}) => {
  const routeRender = (props) => {
    if (checkIsAuth() && restricted) {
      return <Redirect exact to="/" />;
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

export default PublicRoute;

PublicRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.elementType,
  layout: PropTypes.elementType,
  restricted: PropTypes.bool,
};
