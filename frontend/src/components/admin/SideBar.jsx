import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function SideBar() {
  return (
    <div className="flex flex-col m-4 font-normal mt-[60px]">
        <NavLink 
          to="/Admin/Dashboard" 
          className={({ isActive }) => 
            isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
          <i className='bx bxs-dashboard text-gray-700 text-xl'></i>
          <span className='font-sans ml-4 font-light'>Dashboard</span>
        </NavLink>

        <NavLink 
          to="/Admin/Order" 
          className={({ isActive }) => 
            isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
          <i className='bx bx-package text-gray-700 text-xl'></i>
          <span className='font-sans ml-4 font-light'>Orders</span>
        </NavLink>


        <NavLink to="/Admin/Contact" 
          className={({ isActive }) => 
          isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
            
          <i className='bx bx-chat text-gray-700 text-xl'></i>
          <span className='font-sans ml-4 font-light'>Contact</span>
        </NavLink>
        <NavLink to="/Admin/Centers"
          className={({ isActive }) => 
          isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
          <i class='bx bx-store-alt text-gray-700 text-xl'></i>
          <span className='font-sans ml-4 font-light'>Centers</span>
        </NavLink>

        <NavLink to="/Admin/Users" 
          className={({ isActive }) => 
          isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
          <i class='bx bx-user-pin text-gray-700 text-xl'></i>
          <span className='font-sans ml-4 font-light'>Users</span>
            
        </NavLink>

        <NavLink 
  to="/Admin/ViewUser" 
  className={({ isActive }) => 
    isActive 
      ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] shadow-md" 
      : "p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
  }
>
  {({ isActive }) => (
    <>
      <i className={`bx bx-user text-gray-700 text-xl ${isActive ? 'text-green-700' : 'text-gray-700'}`}></i>
      <span className={`font-sans ml-4 font-light ${isActive ? 'text-green-700' : 'text-gray-700'}`}>Profile</span>
    </>
  )}
</NavLink>


          <div className="p-2 flex items-center">
            <i className='bx bx-log-out text-gray-700 text-xl'></i>
            <span className='font-sans ml-4 font-light'>Logout</span>
          </div>
    </div>
  )
}

export default SideBar