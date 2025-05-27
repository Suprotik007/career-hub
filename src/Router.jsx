import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import JobDetails from './pages/JobDetails';
import PrivateRoute from './pages/PrivateRoute';
import JobApply from './pages/JobApply';

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
    loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`),
    Component:JobDetails
  },
  {
    path:'/jobApply/:id',
    
    element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
  }
    ]
  },
 
  
]); 
 
export default Router;