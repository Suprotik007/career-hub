import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

const Router = createBrowserRouter([
  {

    path: "/",
    Component: RootLayout,
    children:[
        {

    index:true,
    Component:Home
  
        },
         {
    path:'/register',
    Component:Register
  },
         {
    path:'/login',
    Component:Login
  }
    ]
  },
 
  
]); 
 
export default Router;