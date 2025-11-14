
import { Outlet } from 'react-router';
import  Sidebar  from '../common/Sidebar';
import React from 'react'

function AppLayout() {
  return (
    <div className = "grid grid-cols-12">
        <div className = "col-span-3">
      <Sidebar />
      </div>
      <div className='col-span-9 px-8 py-4'>
        <Outlet/>
        </div>
      
    </div>
  );
}

export default AppLayout;
