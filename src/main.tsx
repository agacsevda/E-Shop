import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./router";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} /> //router için bu satırı yazıyoruz.//app.tsx ile artık işimiz kalmadı ....
);
