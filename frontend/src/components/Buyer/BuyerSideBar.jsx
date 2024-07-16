import React from 'react'

function BuyerSideBar() {
  return (
    <div className="flex flex-col m-4 font-normal mt-[60px]">
        <div className="bg-white p-2 rounded-md flex items-center min-w-[227px] max-w-[230px] ">
            <i className='bx bxs-dashboard text-gray-700 text-xl'></i>
            <span className='font-sans ml-4 font-light'>Dashboard</span>
        </div>

    
      <div className="p-2 flex items-center">
        <i className='bx bx-notepad text-gray-700 text-xl'></i>
        <span className='font-sans ml-4 font-light'>Collecting Center</span>
      </div>
      <div className="p-2 flex items-center">
        <i className='bx bx-chat text-gray-700 text-xl'></i>
        <span className='font-sans ml-4 font-light'>Store</span>
      </div>
      <div className="p-2 flex items-center">
        <i className='bx bx-user text-gray-700 text-xl'></i>
        <span className='font-sans ml-4 font-light'>Orders</span>
      </div>
      <div className="p-2 flex items-center">
        <i className='bx bx-user text-gray-700 text-xl'></i>
        <span className='font-sans ml-4 font-light'>Bidding</span>
      </div>
      <div className="p-2 flex items-center">
        <i className='bx bx-user text-gray-700 text-xl'></i>
        <span className='font-sans ml-4 font-light'>Delivery</span>
      </div>
      <div className="p-2 flex items-center">
        <i className='bx bx-user text-gray-700 text-xl'></i>
        <span className='font-sans ml-4 font-light'>Profile</span>
      </div>
      <div className="p-2 flex items-center">
        <i className='bx bx-log-out text-gray-700 text-xl'></i>
        <span className='font-sans ml-4 font-light'>Logout</span>
      </div>
    </div>
  )
}

export default BuyerSideBar