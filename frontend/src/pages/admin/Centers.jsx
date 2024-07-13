import React from 'react'
import NavBar from '../../components/admin/NavBar'
import SideBar from '../../components/admin/SideBar'
import { Link } from 'react-router-dom'
import profile from '../../assets/images.jpeg';
import profile1 from '../../assets/pexels-photo-3763188 1.png'

function Centers() {
  return (
    <>
        <NavBar />
        <div className="flex">
            <SideBar />
            <div className="flex flex-col flex-1">
                <div className="flex flex-col">
                    <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Users</div>
                    <div className="flex flex-row gap-3">
                        <div className="font-normal text-gray-400 text-md">Dashboard</div>{">"}
                        <div className="font-normal text-md">Users</div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 bg-white my-7 mx-7 p-5 rounded-lg shadow-lg p-8 pt-5">
                    <div className="flex justify-between">
                        <div className="font-semibold text-xl">Users</div>
                        <div className="flex gap-3 items-center justify-center">
                            <input type="text" className='bg-gray-300 w-60 rounded-md px-3' placeholder='search'  />
                            <i className='bx bx-search' ></i>
                        </div>
                    </div>
                    <table className='mr-1'>
                        <tr className='font-semibold font-center '>
                            <th className='px-6 py-3  text-sm font-semibold '>Center ID</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Contact Person</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Email</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Phone</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Location</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Status</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Action</th>
                        </tr>
                        <tbody className='font-light text-center'>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-sm  '>U-003</td>
                                <td className="text-sm px-2">John Doe</td>
                                <td className='px-8 py-5 text-sm'>johndoe@gmail.com</td>
                                <td className='px-8 py-5 text-sm '>077-456-7654</td>
                                <td className='px-8 py-5 text-sm'>Kandy</td>
                                <td className='px-8 py-5 text-sm'><span className='text-green-600 font-semibold'>Active</span></td>
                                <td className='px-8 py-5 text-sm'><Link to="/Admin/ViewUser"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-sm  '>U-010</td>
                                <td className="text-sm px-2">Jane</td>
                                <td className='px-8 py-5 text-sm'>jane@gmail.com</td>
                                <td className='px-8 py-5 text-sm'>074-426-3654</td>
                                <td className='px-8 py-5 text-sm'>Ratnapura</td>
                                <td className='px-8 py-5 text-sm'><span className='text-red-600 font-semibold'>Pending</span></td>
                                <td className='px-8 py-5 text-sm'><Link to="/Admin/ViewUser"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-sm  '>U-002</td>
                                <td className="text-sm px-2">Michael</td>
                                <td className='px-8 py-5 text-sm'>mich@gmail.com</td>
                                <td className='px-8 py-5 text-sm'>071-555-7654</td>
                                <td className='px-8 py-5 text-sm'>Matale</td>
                                <td className='px-8 py-5 text-sm'><span className='text-red-600 font-semibold'>Pending</span></td>
                                <td className='px-8 py-5 text-sm'><Link to="/Admin/ViewUser"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-sm  '>U-008</td>
                                <td className="text-sm px-2">Emily</td>
                                <td className='px-8 py-5 text-sm'>emily@gmail.com</td>
                                <td className='px-8 py-5 text-sm'>070-216-1654</td>
                                <td className='px-8 py-5 text-sm'>Colombo</td>
                                <td className='px-8 py-5 text-sm'><span className='text-green-600 font-semibold'>Active</span></td>
                                <td className='px-8 py-5 text-sm'><Link to="/Admin/ViewUser"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-sm  '>U-009</td>
                                <td className="text-sm px-2">Brown</td>
                                <td className='px-8 py-5 text-sm'>brownn@gmail.com</td>
                                <td className='px-8 py-5 text-sm'>077-726-7754</td>
                                <td className='px-8 py-5 text-sm'>Negombo</td>
                                <td className='px-8 py-5 text-sm'><span className='text-green-600 font-semibold'>Active</span></td>
                                <td className='px-8 py-5 text-sm'><Link to="/Admin/ViewUser"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Centers