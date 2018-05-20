import CounterPage from "../components/pages/counter-material";

import {
  Dashboard
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: CounterPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" },
  { redirect: true, path: "/dashboard", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
