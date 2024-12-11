import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/Home";
import FutureProduct from "../components/homeComponents/FutureProduct.";
import About from "../pages/About";
import Login from "../pages/Login";
import Registar from "../pages/Registar";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/product',
          element:<FutureProduct/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/registar',
          element:<Registar/>
        }
      ]
    },
  ]);
  