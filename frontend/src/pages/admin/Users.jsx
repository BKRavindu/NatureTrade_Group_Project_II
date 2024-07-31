import React from 'react'
import NavBar from '../../components/admin/NavBar'
import SideBar from '../../components/admin/SideBar'
import { Link } from 'react-router-dom'
import profile from '../../assets/pexels-photo-3763188 1.png';
import profile2 from '../../assets/Anusha_de Silva_1714285796.jpeg'
import profile3 from '../../assets/Kavindi_Ranasinghe_1714286382.jpeg'
import profile4 from '../../assets/Malith_Perera_1714318818.jpeg'


function Users() {
  return (
    <>
        <NavBar />
        <div className="flex">
            <SideBar />
            <div className="flex flex-col flex-1 ml-[250px]">
                <div className="flex flex-col">
                    <div className="font-semibold text-2xl mb-2 -mt-12 mb-5">Users</div>
                    <div className="flex flex-row gap-3">

                        <div className="font-normal text-gray-400 text-xl">Dashboard</div>{">"}
                        <div className="font-normal text-xl">Users</div>
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
                            <th className='px-6 py-3  text-lg font-semibold '>User ID</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Name</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Email</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Phone</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Role</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Created at</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Status</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Action</th>
                        </tr>
                        <tbody className='font-light text-center'>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-lg  '>U-003</td>
                                <td className='px-8 py-5 text-lg flex items-center'>                                    
                                    <img src={profile} alt="" className='w-8 h-8 rounded-full object-cover mr-2' />
                                    <div className="text-lg px-2">John Doe</div>
                                </td>
                                <td className='px-8 py-5 text-lg'>johndoe@gmail.com</td>
                                <td className='px-8 py-5 text-lg '>077-456-7654</td>
                                <td className='px-8 py-5 text-lg'>Buyer</td>
                                <td className='px-8 py-5 text-lg'>2024-06-23</td>
                                <td className='px-8 py-5 text-lg'><span className='text-green-600 font-semibold'>Active</span></td>
                                <td className='px-8 py-5 text-lg'><Link to="/Admin/ViewUser"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-lg  '>U-010</td>
                                <td className='px-8 py-5 text-lg flex items-center'>                                    
                                    <img src={profile4} alt="" className='w-8 h-8 rounded-full object-cover mr-2' />
                                    <div className="text-lg px-2">Jane</div>
                                </td>
                                <td className='px-8 py-5 text-lg'>jane@gmail.com</td>
                                <td className='px-8 py-5 text-lg'>074-426-3654</td>
                                <td className='px-8 py-5 text-lg'>Seller</td>
                                <td className='px-8 py-5 text-lg'>2024-04-23</td>
                                <td className='px-8 py-5 text-lg'><span className='text-green-600 font-semibold'>Active</span></td>
                                <td className='px-8 py-5 text-lg'><Link to="/Admin/ViewUser"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-lg  '>U-002</td>
                                <td className='px-8 py-5 text-lg flex items-center'>                                    
                                    <img src={profile2} alt="" className='w-8 h-8 rounded-full object-cover mr-2' />
                                    <div className="text-lg px-2">Michael</div>
                                </td>
                                <td className='px-8 py-5 text-lg'>mich@gmail.com</td>
                                <td className='px-8 py-5 text-lg'>071-555-7654</td>
                                <td className='px-8 py-5 text-lg'>Collector</td>
                                <td className='px-8 py-5 text-lg'>2024-03-23</td>
                                <td className='px-8 py-5 text-lg'><span className='text-green-600 font-semibold'>Active</span></td>
                                <td className='px-8 py-5 text-lg'><Link to="/Admin/ViewUser"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-lg  '>U-008</td>
                                <td className='px-8 py-5 text-lg flex items-center'>                                    
                                    <img src={profile3} alt="" className='w-8 h-8 rounded-full object-cover mr-2' />
                                    <div className="text-lg px-2">Emily</div>
                                </td>
                                <td className='px-8 py-5 text-lg'>emily@gmail.com</td>
                                <td className='px-8 py-5 text-lg'>070-216-1654</td>
                                <td className='px-8 py-5 text-lg'>Seller</td>
                                <td className='px-8 py-5 text-lg'>2024-02-23</td>
                                <td className='px-8 py-5 text-lg'><span className='text-green-600 font-semibold'>Active</span></td>
                                <td className='px-8 py-5 text-lg'><Link to="/Admin/ViewUser"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100 whitespace-nowrap'>
                                <td className='px-8 py-5 text-lg  '>U-009</td>
                                <td className='px-8 py-5 text-lg flex items-center'>                                    
                                    <img src={profile4} alt="" className='w-8 h-8 rounded-full object-cover mr-2' />
                                    <div className="text-lg px-2">Brown</div>
                                </td>
                                <td className='px-8 py-5 text-lg'>brownn@gmail.com</td>
                                <td className='px-8 py-5 text-lg'>077-726-7754</td>
                                <td className='px-8 py-5 text-lg'>Buyer</td>
                                <td className='px-8 py-5 text-lg'>2024-01-23</td>
                                <td className='px-8 py-5 text-lg'><span className='text-green-600 font-semibold'>Active</span></td>
                                <td className='px-8 py-5 text-lg'><Link to="/Admin/ViewUser"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Users