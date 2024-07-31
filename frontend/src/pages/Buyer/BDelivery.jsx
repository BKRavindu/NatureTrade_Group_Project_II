import React from 'react'
import BuyerNavBar from '../../components/Buyer/BuyerNavBar'
import BuyerSideBar from '../../components/Buyer/BuyerSideBar'


function BDelivery() {
  return (
    <>
        <BuyerNavBar />
        <div className="flex">
            <BuyerSideBar />
            <div className="flex flex-col flex-1 ">
                <div className="flex flex-col">
                        <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Delivery</div>
                        <div className="flex flex-row gap-3">

                            <div className="font-normal text-gray-400 text-md">Dashboard</div>{">"}
                            <div className="font-normal text-md">Delivery</div>
                        </div>
                </div>
                <div className="flex flex-col gap-3 bg-white my-7 p-5 rounded-lg shadow-lg p-8 pt-5">
                    <div className="flex justify-between">
                        <div className="font-semibold text-xl">Delivery</div>
                        <div className="flex gap-3 items-center justify-center">
                            <input type="text" className='bg-gray-300 w-60 rounded-md px-3' placeholder='search'  />
                            <i className='bx bx-search' ></i>
                        </div>
                    </div>
                    <table className=''>
                        <tr className='font-semibold font-center '>
                            <th className='px-6 py-3  text-sm font-semibold '>Company ID</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Company Name</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Ordered/Not Ordered</th>
                            <th className='px-6 py-3  text-sm font-semibold '>Action</th>
                        </tr>
                        <tbody className='font-light text-center'>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm  '>D007</td>
                                <td className='px-8 py-5 text-sm'>DeliveryRBIT</td>
                                <td className='px-8 py-5 text-sm'><span className='text-red-400 font-semibold'>Not Ordered</span></td>
                                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Select
                                </button>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm'>D006</td>
                                <td className='px-8 py-5 text-sm'>Conquer Delivery Smith</td>
                                <td className='px-8 py-5 text-sm'><span className='text-red-400 font-semibold'>Not Ordere</span></td>
                                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Select
                                </button>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm'>D004</td>
                                <td className='px-8 py-5 text-sm'>courien</td>
                                <td className='px-8 py-5 text-sm'><span className='text-green-600 font-semibold'>Ordered</span></td>
                                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Select
                                </button>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm'>D007</td>
                                <td className='px-8 py-5 text-sm'>Quick might</td>
                                <td className='px-8 py-5 text-sm'><span className='text-green-600 font-semibold'>Ordered</span></td>
                                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Select
                                </button>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-sm'>D014</td>
                                <td className='px-8 py-5 text-sm'>Shippingzilla</td>
                                <td className='px-8 py-5 text-sm'><span className='text-red-400 font-semibold'>Not Ordered</span></td>
                                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Select
                                </button>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
                
        </div>
    </>
  )
}

export default BDelivery