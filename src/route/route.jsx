import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/Home";
import FutureProduct from "../components/homeComponents/FutureProduct.";
import About from "../pages/About";
import Login from "../pages/Login";
import Registar from "../pages/Registar";
import DeshboardLayout from "../layoutes/DeshboardLayout";
import PrivetRouter from "./PrivetRouter";
import MyProduct from "../components/deshboard/seller/MyProduct";
import AddProduct from "../components/deshboard/seller/AddProduct";

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
    },{
      path:"/deshboard",
      element:<PrivetRouter> <DeshboardLayout/> </PrivetRouter> ,
      children:[
        {
        path:"/deshboard/myproduct",
        element:<MyProduct/>
      },
      {
        path:"/deshboard/add-product",
        element:<AddProduct/> 
      },
    ]
    }
  ]);
  