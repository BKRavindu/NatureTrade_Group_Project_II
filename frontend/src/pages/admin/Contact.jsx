import React from 'react'
import NavBar from '../../components/admin/NavBar'
import SideBar from '../../components/admin/SideBar'
import { Link } from 'react-router-dom'
import profile from '../../assets/images.jpeg';
import profile1 from '../../assets/pexels-photo-3763188 1.png'

function Contact() {
  return (
    <>
        <NavBar />
        <div className="flex">
            <SideBar />
            <div className="flex flex-col flex-1 ml-[250px]">
                <div className="flex flex-col">
                    <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Contact</div>
                    <div className="flex flex-row gap-3">

                        <div className="font-normal text-gray-400 text-md">Dashboard</div>{">"}
                        <div className="font-normal text-md">Contact</div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 bg-white my-7 mx-7 p-5 rounded-lg shadow-lg p-8 pt-5">
                    <div className="flex justify-between">
                       
                        <div className="flex gap-3 items-center justify-center">
                            <input type="text" className='bg-gray-300 w-60 rounded-md px-3' placeholder='search'  />
                            <i className='bx bx-search' ></i>
                        </div>
                    </div>
                    <table className='mr-1'>
                        <tr className='font-semibold font-center '>
                            <th className='px-6 py-3  text-sm font-semibold '>User ID</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Name</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Email</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Role</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Date & Time</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Description</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Action</th>
                        </tr>
                        <tbody className='font-light text-center'>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-sm  '>U-003</td>
                                <td className='px-8 py-5 text-sm flex items-center'>                                    
                                    <img src={profile} alt="" className='w-[30px] h-[30px] rounded-full object-cover mr-2' />
                                    <div className="text-sm px-2">John Doe</div>
                                </td>
                                <td className='px-8 py-5 text-sm'>johndoe@gmail.com</td>
                                <td className='px-8 py-5 text-sm'>Buyer</td>
                                <td className='px-8 py-5 text-sm'>2024-06-23</td>
                                <td className='px-8 py-5 text-sm'>Interested in purchasing</td>
                                <td className='px-8 py-5 text-sm'><Link to="/Admin/Contact/Chat"><i className='bx bx-message-rounded-dots text-gray-500 text-2xl'></i></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-sm  '>U-010</td>
                                <td className='px-8 py-5 text-sm flex items-center'>                                    
                                    <img src={profile1} alt="" className='w-[30px] h-[30px] rounded-full object-cover mr-2' />
                                    <div className="text-sm px-2">Jane</div>
                                </td>
                                <td className='px-8 py-5 text-sm'>jane@gmail.com</td>
                                <td className='px-8 py-5 text-sm'>Seller</td>
                                <td className='px-8 py-5 text-sm'>2024-04-23</td>
                                <td className='px-8 py-5 text-sm'>Need assistance with</td>
                                <td className='px-8 py-5 text-sm'><Link to="/Admin/Contact/Chat"><i className='bx bx-message-rounded-dots text-gray-500 text-2xl'></i></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-sm  '>U-002</td>
                                <td className='px-8 py-5 text-sm flex items-center'>                                    
                                    <img src={profile} alt="" className='w-[30px] h-[30px] rounded-full object-cover mr-2' />
                                    <div className="text-sm px-2">Michael</div>
                                </td>
                                <td className='px-8 py-5 text-sm'>mich@gmail.com</td>
                                <td className='px-8 py-5 text-sm'>Collector</td>
                                <td className='px-8 py-5 text-sm'>2024-03-23</td>
                                <td className='px-8 py-5 text-sm'>Seeking advice on improving</td>
                                <td className='px-8 py-5 text-sm'><Link to="/Admin/Contact/Chat"><i className='bx bx-message-rounded-dots text-gray-500 text-2xl'></i></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-sm  '>U-008</td>
                                <td className='px-8 py-5 text-sm flex items-center'>                                    
                                    <img src={profile1} alt="" className='w-[30px] h-[30px] rounded-full object-cover mr-2' />
                                    <div className="text-sm px-2">Emily</div>
                                </td>
                                <td className='px-8 py-5 text-sm'>emily@gmail.com</td>
                                <td className='px-8 py-5 text-sm'>Seller</td>
                                <td className='px-8 py-5 text-sm'>2024-02-23</td>
                                <td className='px-8 py-5 text-sm'>I have a query about</td>
                                <td className='px-8 py-5 text-sm'><Link to="/Admin/Contact/Chat"><i className='bx bx-message-rounded-dots text-gray-500 text-2xl'></i></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-sm  '>U-009</td>
                                <td className='px-8 py-5 text-sm flex items-center'>                                    
                                    <img src={profile} alt="" className='w-[30px] h-[30px] rounded-full object-cover mr-2' />
                                    <div className="text-sm px-2">Brown</div>
                                </td>
                                <td className='px-8 py-5 text-sm'>brownn@gmail.com</td>
                                <td className='px-8 py-5 text-sm'>Buyer</td>
                                <td className='px-8 py-5 text-sm'>2024-01-23</td>
                                <td className='px-8 py-5 text-sm'>Facing issues with</td>
                                <td className='px-8 py-5 text-sm'><Link to="/Admin/Contact/Chat"><i className='bx bx-message-rounded-dots text-gray-500 text-2xl'></i></Link></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact