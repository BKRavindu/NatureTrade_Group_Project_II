import React from 'react'
import {Link}from 'react-router-dom'
import {NavLink} from 'react-router-dom'


function SideBar() {
  return (
    <div className="flex flex-col m-4 font-normal mt-[60px]">
        
        <NavLink
          to="/supplier/Dashboard" 
          className={({ isActive }) => 
            isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
            <i className='bx bxs-dashboard text-gray-700 text-xl'></i>
          
            <span className='font-sans ml-4 font-semibold-600'>Dashboard</span>
        </NavLink>

        <NavLink
          to="/supplier/Requests" 
          className={({ isActive }) => 
            isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
            <i className='bx bx-receipt text-gray-700 text-xl'></i>
        <span className='font-sans ml-4 font-semibold-600'>Requests</span>
        </NavLink>

        <NavLink
          to="/supplier/SupplierStore" 
          className={({ isActive }) => 
            isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
        <i className='bx bx-store text-gray-700 text-xl'></i>
        <span className='font-sans ml-4 font-semibold-600'>Stock</span>
        </NavLink>

        <NavLink
          to="/supplier/Advertisements" 
          className={({ isActive }) => 
            isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
        <i className='bx bx-spreadsheet text-gray-700 text-xl'></i>
        <span className='font-sans ml-4 font-semibold-600'>Advertisements</span>
        </NavLink>

        <NavLink 
          to="/supplier/SupplierContact" 
          className={({ isActive }) => 
            isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
        <i className='bx bx-chat text-gray-700 text-xl'></i>
        <span className='font-sans ml-4 font-semibold-600'>Contact</span>
        </NavLink>

        <NavLink 
          to="/supplier/SupplierProfile" 
          className={({ isActive }) => 
            isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
        <i className='bx bx-user text-gray-700 text-xl'></i>
        <span className='font-sans ml-4 font-semibold-600'>Profile</span>
        </NavLink>

      <div className="p-2 flex items-center">
        <i className='bx bx-log-out text-gray-700 text-xl'></i>
        <span className='font-sans ml-4 font-semibold-600'>Logout</span>
      </div>

    </div>
  )
}

export default SideBar