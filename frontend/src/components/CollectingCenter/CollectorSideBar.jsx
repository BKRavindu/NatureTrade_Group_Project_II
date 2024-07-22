import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function SideBar() {
  return (
    <div className="flex flex-col m-4 font-normal mt-[60px]">
        <NavLink 
          to="/CollectorDash" 
          className={({ isActive }) => 
            isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
          <i className='bx bxs-dashboard text-gray-700 text-xl'></i>
          <span className='font-sans ml-4 font-light'>Dashboard</span>
        </NavLink>

        <NavLink 
          to="/CollectorSuppliers" 
          className={({ isActive }) => 
            isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
          <i className='bx bx-package text-gray-700 text-xl'></i>
          <span className='font-sans ml-4 font-light'>Suppliers</span>
        </NavLink>


        <NavLink to="/CollectorRequests" 
          className={({ isActive }) => 
          isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
            
          <i className='bx bx-chat text-gray-700 text-xl'></i>
          <span className='font-sans ml-4 font-light'>Requests</span>
        </NavLink>
        <NavLink to="/CollectorStore"
          className={({ isActive }) => 
          isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
          <i className='bx bx-credit-card-front text-gray-700 text-xl'></i>
          <span className='font-sans ml-4 font-light'>Store</span>
        </NavLink>

        <NavLink to="/CollectorBidding"
          className={({ isActive }) => 
          isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
          <i className='bx bx-credit-card-front text-gray-700 text-xl'></i>
          <span className='font-sans ml-4 font-light'>Bidding</span>
        </NavLink>

        <NavLink to="/CollectorProfile" 
          className={({ isActive }) => 
          isActive ? "bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] " : " p-2 rounded-md flex items-center min-w-[227px] max-w-[230px]"
          }>
          <i className='bx bx-user text-gray-700 text-xl'></i>
          <span className='font-sans ml-4 font-light'>Profile</span>
            
        </NavLink>

          <div className="p-2 flex items-center">
            <i className='bx bx-log-out text-gray-700 text-xl'></i>
            <span className='font-sans ml-4 font-light'>Logout</span>
          </div>
    </div>
  )
}

export default SideBar