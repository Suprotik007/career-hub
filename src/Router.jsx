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
import MyApplications from './pages/MyApplications';
import AddJob from './pages/AddJob';
import MypostedJob from './pages/MypostedJob';

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
    
    element: <JobApply></JobApply>
  },
  {
    path:'/myApplications',
    
    Component: MyApplications
  },
  {
    path:'/addJobs',
    
    Component: AddJob

  },
  {
    path:'/postedJobs',
    
    Component: MypostedJob

  },
    ]
  },
 
  
]); 
 
export default Router;