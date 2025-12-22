import { createBrowserRouter, type RouteObject } from "react-router-dom";//sayfalara gitme yolu
import Root from "./Root";
import Home from "./pages/Home";
import ProductDetail from "./components/ui/common/ProductDetail";
import Sepetim from "./components/ui/common/Sepetim";
import Odeme from "./components/ui/common/Odeme";


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
},
{
  path:"/sepetim",
  element:<Sepetim/>,
},
{
  path:"/odeme",
  element:<Odeme/>,
}


  ],
  },
];
const router = createBrowserRouter(routes);

export default router;