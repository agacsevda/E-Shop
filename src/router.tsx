import { createBrowserRouter, type RouteObject } from "react-router-dom";//sayfalara gitme yolu
import Root from "./Root";
import Home from "./pages/Home";
import ProductDetail from "./components/ui/common/ProductDetail";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children : [{
      element:<Home/>,
      index: true,
    },
    {
  path: "/product/:id",
  element: <ProductDetail />,
}

  ],
  },
];
const router = createBrowserRouter(routes);

export default router;