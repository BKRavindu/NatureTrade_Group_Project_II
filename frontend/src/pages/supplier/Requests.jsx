import React from 'react'
import NavBar from '../../components/supplier/NavBar'
import SideBar from '../../components/supplier/SideBar'

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
                <div className="flex flex-col gap-3 bg-white my-7 p-5 rounded-lg shadow-lg p-8 pt-5">
                    <div className="flex justify-between">
                        <div className="font-semibold text-xl">Orders</div>
                        <div className="flex gap-3 items-center justify-center">
                            <input type="text" className='bg-gray-300 w-60 rounded-md px-3' placeholder='search'  />
                            <i className='bx bx-search' ></i>
                        </div>
                    </div>
                    <table className=''>
                        <tr className='font-semibold font-center '>
                            <th className='px-6 py-3  text-sm font-semibold '>Advertisment No</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Date</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Time</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Requested product</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Request Status</th>
                            

                            
                        </tr>
                        <tbody className='font-light text-center'>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm  '>007</td>
                                <td className='px-8 py-5 text-sm'>2024-04-01</td>
                                <td className='px-8 py-5 text-sm'>6.00 PM</td>
                                <td className='px-8 py-5 text-sm'>Paid</td>
                                <td className="px-8 py-5 text-sm">
                            <button className="bg-green-600 text-black font-semibold rounded px-4 py-2">
                                    Processing̥
                                </button>
                            </td>
                        
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm'>006</td>
                                <td className='px-8 py-5 text-sm'>2024-04-01</td>
                                <td className='px-8 py-5 text-sm'>3.30 PM</td>
                                <td className='px-8 py-5 text-sm'>Cinnamon</td>
                                <td className='px-8 py-5 text-sm'><span className='bg-yellow-500 text-black font-semibold rounded px-4 py-2'>Cancelled</span></td>
                               
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm'>004</td>
                                <td className='px-8 py-5 text-sm'>2024-04-01</td>
                                <td className='px-8 py-5 text-sm'>12.20 PM</td>
                                <td className='px-8 py-5 text-sm'>Pepper</td>
                                <td className='px-8 py-5 text-sm'><button className="bg-green-600 text-black font-semibold rounded px-4 py-2">
                                    Processing
                                </button></td>
                                
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm'>007</td>
                                <td className='px-8 py-5 text-sm'>2024-04-01</td>
                                <td className='px-8 py-5 text-sm'>9.40 AM</td>
                                <td className='px-8 py-5 text-sm'>Clove</td>
                                <td className='px-8 py-5 text-sm'><button className="bg-green-600 text-black font-semibold rounded px-4 py-2">
                                    Processing
                                </button></td>
                                
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm'>014</td>
                                <td className='px-8 py-5 text-sm'>2024-04-01</td>
                                <td className='px-8 py-5 text-sm'>8.30 AM</td>
                                <td className='px-8 py-5 text-sm'>Nutmeg</td>
                                <td className='px-8 py-5 text-sm'><button className="bg-green-600 text-black font-semibold rounded px-4 py-2">
                                    Processing
                                </button></td>
                               
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