import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { Welcome } from "@/pages/Welcome";
import { Login } from "@/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
