import React from 'react'
import NavBar from '../../components/deliveryCompany/NavBar'
import SideBar from '../../components/deliveryCompany/SideBar'
import { Link } from 'react-router-dom'


function Order() {
  return (
    <>
        <NavBar />
        <div className="flex">
            <SideBar />
            <div className="flex flex-col flex-1 ">
                <div className="flex flex-col">
                        <div className="font-semibold text-2xl mb-2 -mt-12 mb-5">Orders</div>
                        <div className="flex flex-row gap-3">

                            <div className="font-normal text-gray-400 text-lg">Dashboard</div>{">"}
                            <div className="font-normal text-lg">Order</div>
                        </div>
                </div>
                <div className="flex flex-col gap-3 bg-white my-7 mx-7 p-5 rounded-lg shadow-lg p-8 pt-5">
                    <div className="flex justify-between">
                        <div className="font-semibold text-2xl">Orders</div>
                        <div className="flex gap-3 items-center justify-center">
                            <input type="text" className='bg-gray-300 w-60 rounded-md px-3' placeholder='search'  />
                            <i className='bx bx-search' ></i>
                        </div>
                    </div>
                    <table className='mr-3'>
                        <tr className='font-semibold font-center '>
                            <th className='px-6 py-3  text-lg font-semibold '>Order ID</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Customer</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Order Date</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Payment Status</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Order Status</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Total</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Action</th>
                        </tr>
                        <tbody className='font-light text-center'>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-lg  '>007</td>
                                <td className='px-8 py-5 text-lg'>John Doe</td>
                                <td className='px-8 py-5 text-lg'>2024-04-12</td>
                                <td className='px-8 py-5 text-lg'>Paid</td>
                                <td className='px-8 py-5 text-lg'><span className='text-green-600 font-semibold'>Processing</span></td>
                                <td className='px-8 py-5 text-lg'>15000</td>
                                <td className='px-8 py-5 text-lg'><Link to="/Delivery/OrderView"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-lg'>006</td>
                                <td className='px-8 py-5 text-lg'>Jane lgith</td>
                                <td className='px-8 py-5 text-lg'>2024-04-10</td>
                                <td className='px-8 py-5 text-lg'>Paid</td>
                                <td className='px-8 py-5 text-lg'><span className='text-red-400 font-semibold'>Cancelled</span></td>
                                <td className='px-8 py-5 text-lg'>30000</td>
                                <td className='px-8 py-5 text-lg'><Link to="/Delivery/OrderView"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-lg'>004</td>
                                <td className='px-8 py-5 text-lg'>Michael</td>
                                <td className='px-8 py-5 text-lg'>2024-04-04</td>
                                <td className='px-8 py-5 text-lg'>Paid</td>
                                <td className='px-8 py-5 text-lg'><span className='text-green-600 font-semibold'>Processing</span></td>
                                <td className='px-8 py-5 text-lg'>25000</td>
                                <td className='px-8 py-5 text-lg'><Link to="/Delivery/OrderView"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-lg'>007</td>
                                <td className='px-8 py-5 text-lg'>Emily</td>
                                <td className='px-8 py-5 text-lg'>2024-03-04</td>
                                <td className='px-8 py-5 text-lg'>Paid</td>
                                <td className='px-8 py-5 text-lg'><span className='text-green-600 font-semibold'>Processing</span></td>
                                <td className='px-8 py-5 text-lg'>21000</td>
                                <td className='px-8 py-5 text-lg'><Link to="/Delivery/OrderView"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-lg'>014</td>
                                <td className='px-8 py-5 text-lg'>Brown</td>
                                <td className='px-8 py-5 text-lg'>2024-04-01</td>
                                <td className='px-8 py-5 text-lg'>Paid</td>
                                <td className='px-8 py-5 text-lg'><span className='text-green-600 font-semibold'>Processing</span></td>
                                <td className='px-8 py-5 text-lg'>22000</td>
                                <td className='px-8 py-5 text-lg'><Link to="/Delivery/OrderView"><ion-icon name="eye-outline"></ion-icon></Link></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
                
        </div>
    </>
  )
}

export default Order