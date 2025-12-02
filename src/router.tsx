import { createBrowserRouter, type RouteObject } from "react-router-dom";//sayfalara gitme yolu
import Root from "./Root";
import Home from "./pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children : [{
      element:<Home/>,
      index: true,
    },

  ],
  },
];
const router = createBrowserRouter(routes);

export default router;