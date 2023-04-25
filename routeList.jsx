import Dashboard from "./src/pages/Dashboard";
import ErrorPage from "./src/pages/Errorpage";

const RouteList = [
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
];

export default RouteList;
