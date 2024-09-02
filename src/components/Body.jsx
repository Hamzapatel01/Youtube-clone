/* eslint-disable no-unused-vars */
import Sidebar from './Sidebar';
// import Home from './Home';
import {Outlet} from 'react-router-dom';
import React from 'react';

const Body = () => {
  return (
    <div className="flex mt-16 pt-16px">
        <Sidebar />
        <Outlet/>
      </div>
  )
}

export default Body