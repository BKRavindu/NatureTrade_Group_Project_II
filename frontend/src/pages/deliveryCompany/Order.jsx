import React from 'react'
import NavBar from '../../components/deliveryCompany/NavBar'
import SideBar from '../../components/deliveryCompany/SideBar'

function Order() {
  return (
    <>
        <NavBar />
        <div className="flex">
            <SideBar />
            <div className="flex flex-col flex-1 ">
                <div className="flex flex-col">
                        <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Orders</div>
                        <div className="flex flex-row gap-3">

                            <div className="font-normal text-gray-400 text-md">Dashboard</div>{">"}
                            <div className="font-normal text-md">Order</div>
                        </div>
                </div>
                <div className="flex flex-col gap-3 bg-white my-7 mx-7 p-5 rounded-lg shadow-lg p-8 pt-5">
                    <div className="flex justify-between">
                        <div className="font-semibold text-xl">Orders</div>
                        <div className="flex gap-3 items-center justify-center">
                            <input type="text" className='bg-gray-300 w-60 rounded-md px-3' placeholder='search'  />
                            <i className='bx bx-search' ></i>
                        </div>
                    </div>
                    <table className='mr-3'>
                        <tr className='font-semibold font-center '>
                            <th className='px-6 py-3  text-sm font-semibold '>Order ID</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Customer</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Order Date</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Payment Status</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Order Status</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Total</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Action</th>
                        </tr>
                        <tbody className='font-light text-center'>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm  '>007</td>
                                <td className='px-8 py-5 text-sm'>John Doe</td>
                                <td className='px-8 py-5 text-sm'>2024-04-12</td>
                                <td className='px-8 py-5 text-sm'>Paid</td>
                                <td className='px-8 py-5 text-sm'><span className='text-green-600 font-semibold'>Processing</span></td>
                                <td className='px-8 py-5 text-sm'>15000</td>
                                <td className='px-8 py-5 text-sm'><ion-icon name="eye-outline"></ion-icon></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm'>006</td>
                                <td className='px-8 py-5 text-sm'>Jane Smith</td>
                                <td className='px-8 py-5 text-sm'>2024-04-10</td>
                                <td className='px-8 py-5 text-sm'>Paid</td>
                                <td className='px-8 py-5 text-sm'><span className='text-red-400 font-semibold'>Cancelled</span></td>
                                <td className='px-8 py-5 text-sm'>30000</td>
                                <td className='px-8 py-5 text-sm'><ion-icon name="eye-outline"></ion-icon></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm'>004</td>
                                <td className='px-8 py-5 text-sm'>Michael</td>
                                <td className='px-8 py-5 text-sm'>2024-04-04</td>
                                <td className='px-8 py-5 text-sm'>Paid</td>
                                <td className='px-8 py-5 text-sm'><span className='text-green-600 font-semibold'>Processing</span></td>
                                <td className='px-8 py-5 text-sm'>25000</td>
                                <td className='px-8 py-5 text-sm'><ion-icon name="eye-outline"></ion-icon></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm'>007</td>
                                <td className='px-8 py-5 text-sm'>Emily</td>
                                <td className='px-8 py-5 text-sm'>2024-03-04</td>
                                <td className='px-8 py-5 text-sm'>Paid</td>
                                <td className='px-8 py-5 text-sm'><span className='text-green-600 font-semibold'>Processing</span></td>
                                <td className='px-8 py-5 text-sm'>21000</td>
                                <td className='px-8 py-5 text-sm'><ion-icon name="eye-outline"></ion-icon></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm'>014</td>
                                <td className='px-8 py-5 text-sm'>Brown</td>
                                <td className='px-8 py-5 text-sm'>2024-04-01</td>
                                <td className='px-8 py-5 text-sm'>Paid</td>
                                <td className='px-8 py-5 text-sm'><span className='text-green-600 font-semibold'>Processing</span></td>
                                <td className='px-8 py-5 text-sm'>22000</td>
                                <td className='px-8 py-5 text-sm'><ion-icon name="eye-outline"></ion-icon></td>
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