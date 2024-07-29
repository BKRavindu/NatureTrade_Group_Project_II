import React from 'react'
import SideBar from '../../components/supplier/SideBar'
import NavBar from '../../components/supplier/NavBar'
import chat from '../../assets/chat.png';

const SupplierContact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-grow">
        <SideBar />
        <div className="flex flex-grow justify-center items-center">
          <img src={chat} alt="Chat" className="w-30 h-30" />
        </div>
      </div>
    </div>
  )
}

export default SupplierContact;
