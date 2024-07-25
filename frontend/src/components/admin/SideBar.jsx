import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function SideBar() {
  return (
    <div className="flex flex-col m-4 mt-[60px] fixed font-poppins">
      <NavLink 
        to="/Admin/Dashboard" 
        className={({ isActive }) => 
          isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]" : "p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
        }>
        <i className='bx bxs-dashboard text-gray-700 text-xl'></i>
        <span className='ml-4'>Dashboard</span>
      </NavLink>

      <NavLink 
        to="/Admin/Order" 
        className={({ isActive }) => 
          isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]" : "p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
        }>
        <i className='bx bx-package text-gray-700 text-xl'></i>
        <span className='ml-4'>Orders</span>
      </NavLink>

      <NavLink 
        to="/Admin/Contact" 
        className={({ isActive }) => 
          isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]" : "p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
        }>
        <i className='bx bx-chat text-gray-700 text-xl'></i>
        <span className='ml-4'>Contact</span>
      </NavLink>

      <NavLink 
        to="/Admin/Centers"
        className={({ isActive }) => 
          isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]" : "p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
        }>
        <i className='bx bx-store-alt text-gray-700 text-xl'></i>
        <span className='ml-4'>Centers</span>
      </NavLink>

      <NavLink 
        to="/Admin/Users" 
        className={({ isActive }) => 
          isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]" : "p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
        }>
        <i className='bx bx-user-pin text-gray-700 text-xl'></i>
        <span className='ml-4'>Users</span>
      </NavLink>

      <NavLink 
        to="/Admin/ViewUser" 
        className={({ isActive }) => 
          isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] shadow-md" : "p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
        }>
        {({ isActive }) => (
          <>
            <i className={`bx bx-user text-gray-700 text-xl ${isActive ? 'text-green-700' : 'text-gray-700'}`}></i>
            <span className={`ml-4 ${isActive ? 'text-green-700' : 'text-gray-700'}`}>Profile</span>
          </>
        )}
      </NavLink>

      <div className="p-2 flex items-center">
        <i className='bx bx-log-out text-gray-700 text-xl'></i>
        <span className='ml-4'>Logout</span>
      </div>
    </div>
  );
}

export default SideBar;
