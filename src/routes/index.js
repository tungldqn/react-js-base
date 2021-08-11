import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page404 from "../pages/Page404";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import routeList from "./routeList";

const renderRoutes = (routes) =>
  routes.map((route, index) =>
    route.children ? (
      route.children.map((childRoute, index) =>
        childRoute.isPrivate ? (
          <PrivateRoute
            key={index}
            path={childRoute.path}
            component={childRoute.component}
            layout={route.layout}
            exact={true}
          />
        ) : (
          <PublicRoute
            key={index}
            path={childRoute.path}
            component={childRoute.component}
            layout={route.layout}
            restricted={childRoute.restricted}
            exact={true}
          />
        )
      )
    ) : route.isPrivate ? (
      <PrivateRoute
        key={index}
        path={route.path}
        component={route.component}
        layout={route.layout}
        exact={true}
      />
    ) : (
      <PublicRoute
        key={index}
        path={route.path}
        component={route.component}
        layout={route.layout}
        restricted={route.restricted}
        exact={true}
      />
    )
  );

const Routes = () => (
  <Router>
    <Switch>
      {renderRoutes(routeList)}
      <Route render={() => <Page404 />} />
    </Switch>
  </Router>
);

export default Routes;
