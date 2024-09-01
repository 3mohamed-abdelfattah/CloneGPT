import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { Welcome } from "@/pages/Welcome";
import { Login } from "@/pages/Login";
import { StartScreen } from "@/pages/StartScreen";
import { SignUp } from "@/pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/CloneGPT/",
    element: <Welcome />,
  },
  {
    path: "/CloneGPT/login",
    element: <Login />,
  },
  {
    path: "/CloneGPT/signup",
    element: <SignUp />,
  },
  {
    path: "/CloneGPT/start",
    element: <StartScreen />
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;