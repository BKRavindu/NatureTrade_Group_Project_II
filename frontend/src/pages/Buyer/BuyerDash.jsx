import React from 'react'

import BuyerSideBar from '../../components/Buyer/BuyerSideBar'
import BuyerNavBar from '../../components/Buyer/BuyerNavBar'
import businessman from '../../assets/undraw_business_deal_re_up4u.svg'
import item1 from '../../assets/item1.svg'
import item2 from '../../assets/item2.svg'
import item3 from '../../assets/item3.svg'
import item4 from '../../assets/item4.svg'


function BuyerDash() {

    const tr = {
        padding: '0.5rem',
        backgroundColor: '#f9f9f9',
        transition: 'background-color 0.3s',
      };

  return (
    <>
        <BuyerNavBar />
        <div className="flex">
            <BuyerSideBar />
            <div className="flex p-2 flex-col flex-1  ">
                <div className="flex flex-col">
                    <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Dashboard</div>
                    <div className="flex flex-row gap-3">

                    <div className="font-normal text-gray-400 text-md">Dashboard</div>{">"}
                    <div className="font-normal text-md">Home</div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white mt-4 rounded-lg border-gray-300 rounded-2xl shadow-lg">
                    <div className="flex flex-col gap-4 flex-col">
                        <div className="text-6xl font-normal">Hello, <span className='font-light text-2xl'>Lakshi!</span></div>
                        <div className="font-normal mt-5">You have <span className='text-red-500'>5</span> orders today.</div>
                    </div>
                    <img src={businessman} alt="" className='w-[300px] h-[150px]'   />
                </div>
                <div className="flex gap-1 justify-between items-center mt-4 ">
                    
                    <div className="flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-2xl shadow-lg">
                        <img src={item1} alt="" className='w-20 h-20 mt-10 bg-green-200 rounded-full p-3' />
                        <div className="text-xl font-semibold">10{" "}<span className='text-lg font-normal'>Processing Orders</span></div>
                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-2xl shadow-lg">
                        <img src={item3} alt="" className='w-20 h-20 mt-10 bg-green-200 rounded-full p-3' />
                        <div className="text-xl font-semibold">25{" "}<span className='text-lg font-normal'>Complete Orders</span></div>
                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-2xl shadow-lg">
                        <img src={item2} alt="" className='w-20 h-20 mt-10 bg-green-200 rounded-full p-3' />
                        <div className="text-xl font-semibold">357{" "}<span className='text-lg font-normal'>Rejected Orders</span></div>
                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-2xl shadow-lg">
                        <img src={item4} alt="" className='w-20 h-20 mt-10 bg-green-200 rounded-full p-3' />
                        <div className="text-xl font-semibold">357{" "}<span className='text-lg font-normal'>Total Orders</span></div>
                    </div>
                   
                </div>
                <div className="flex flex-col gap-3 bg-white my-7 p-5 rounded-lg shadow-lg">
                    <div className="flex justify-between">
                        <div className="font-semibold text-xl">Recent Orders</div>
                        <div className="flex gap-3 items-center justify-center">
                            <input type="text" className='bg-gray-300 w-60 rounded-md px-3' placeholder='search'  />
                            <i className='bx bx-search' ></i>
                        </div>
                    </div>
                    <table className=''>
                        <tr className='font-semibold font-center '>
                            <th className='px-6 py-3  text-lg font-semibold '>Order ID</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Order Date</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Payment Status</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Order Status</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Total</th>
                            
                        </tr>
                        <tbody className='font-light text-center'>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-4 py-3 text-lg  '>007</td>
                                <td className='px-4 py-3 text-lg'>2024-04-12</td>
                                <td className='px-4 py-3 text-lg'>Paid</td>
                                <td className='px-4 py-3 text-lg'><span className='text-green-600 font-semibold'>Processing</span></td>
                                <td className='px-4 py-3 text-lg'>15000</td>
                                
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-4 py-3 text-lg'>006</td>
                                <td className='px-4 py-3 text-lg'>2024-04-10</td>
                                <td className='px-4 py-3 text-lg'>Paid</td>
                                <td className='px-4 py-3 text-lg'><span className='text-red-400 font-semibold'>Cancelled</span></td>
                                <td className='px-4 py-3 text-lg'>30000</td>
                               
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-4 py-3 text-lg'>004</td>
                                <td className='px-4 py-3 text-lg'>2024-04-04</td>
                                <td className='px-4 py-3 text-lg'>Paid</td>
                                <td className='px-4 py-3 text-lg'><span className='text-green-00 font-semibold'>Processing</span></td>
                                <td className='px-4 py-3 text-lg'>25000</td>
                               
                            </tr>
                        </tbody>

                    </table>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default BuyerDash
