import PageLogin from "../pages/login";

// Layout
import AuthLayout from "../layouts/Auth";
import DashBoardLayout from "../layouts/Dashboard";

// Routes
const authRoute = {
  layout: AuthLayout,
  children: [
    {
      path: "/login",
      component: PageLogin,
      restricted: true,
      isPrivate: false,
    },
  ],
};

const dashboardRoute = {
  layout: DashBoardLayout,
  children: [
    {
      path: "/",
      component: PageLogin,
      isPrivate: true,
    },
  ],
};

const Routes = [authRoute, dashboardRoute];

export default Routes;
