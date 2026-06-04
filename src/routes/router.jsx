import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/home/Home";
import Coverage from "../pages/coverage/Coverage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
     children: [
       { index: true, Component: Home },
       {
         path: "coverage",
         Component: Coverage,
       }
     
     ]
  },
]);

export default router;