import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  //   {
  //     path: "/",
  //     element: <Recados />,
  //   },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
