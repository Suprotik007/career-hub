import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import JobDetails from './pages/JobDetails';

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
  },
         {
    path:'/jobs/:id',
    Component:JobDetails
  }
    ]
  },
 
  
]); 
 
export default Router;