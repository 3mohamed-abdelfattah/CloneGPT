import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { Welcome } from "@/pages/Welcome";
import { Login } from "@/pages/Login";
import { StartScreen } from "@/pages/StartScreen";
import { SignUp } from "@/pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/ChatGPT/",
    element: <Welcome />,
  },
  {
    path: "ChatGPT/login",
    element: <Login />,
  },
  {
    path: "ChatGPT/signup",
    element: <SignUp />,
  },
  {
    path: "ChatGPT/start",
    element: <StartScreen />
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
