import React from 'react'
import NavBar from '../../components/admin/NavBar'
import SideBar from '../../components/admin/SideBar'

function AdminDash() {
  return (
    <>
        <NavBar />
        <div className="flex flex-col flex-1">

            <SideBar />
        </div>
    </>
  )
}

export default AdminDash