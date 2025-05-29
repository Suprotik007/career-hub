import React from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';

import UseAuth from '../layouts/UseAuth';
import { myAppPromise } from '../applications';



const MyApplications = () => {
  const { user, loading } = UseAuth();

 

  return (
    <div>
      <ApplicationStats />
      <ApplicationList myAppPromise={myAppPromise(user?.email)} />
    </div>
  );
};

export default MyApplications;

