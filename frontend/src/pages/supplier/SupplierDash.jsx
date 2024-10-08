import React from 'react'

import SideBar from '../../components/supplier/SideBar'
import NavBar from '../../components/supplier/NavBar'
import move from '../../assets/undraw_moving_re_pipp.svg'
import item1 from '../../assets/item1.svg'
import item2 from '../../assets/item2.svg'
import item3 from '../../assets/item3.svg'
import item4 from '../../assets/item4.svg'
import board from '../../assets/board.svg'


function SupplierDash() {

    const tr = {
        padding: '0.5rem',
        backgroundColor: '#f9f9f9',
        transition: 'background-color 0.3s',
      };

  return (
    <>
        <NavBar />
        <div className="flex">
            <SideBar />
            <div className="flex p-2 flex-col flex-1  ">
                <div className="flex flex-col">
                    <div className="font-semibold text-2xl mb-2 -mt-12 mb-5">Dashboard</div>
                    <div className="flex flex-row gap-3">

                    <div className="font-normal text-gray-400 text-xl">Dashboard</div>{">"}
                    <div className="font-normal text-xl">Home</div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white mt-4 rounded-lg border-gray-300 rounded-2xl shadow-lg">
                    <div className="flex flex-col gap-4 flex-col">
                        <div className="text-6xl font-normal">Hello, <span className='font-semibold text-2xl'>Mike!</span></div>
                        <div className="font-normal text-xl mt-5">You have <span className='text-yellow-600 font-black-900'>10</span> Requests today.</div>
                    </div>
                    <img src={move} alt="" className='w-[300px] h-[150px]'  />
                </div>
                <div className="flex gap-1 justify-between items-center mt-4 ">
                    
                    <div className="flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-2xl shadow-lg">
                        <img src={item1} alt="" className='w-20 h-20 mt-10 bg-green-200 rounded-full p-3' />
                        <div className="text-2xl font-semibold">200{" "}<span className='text-xl font-normal'>Total Ads</span></div>
                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-2xl shadow-lg">
                        <img src={item1} alt="" className='w-20 h-20 mt-10 bg-green-200 rounded-full p-3' />
                        <div className="text-2xl font-semibold">150{" "}<span className='text-xl font-normal'>Total Requests</span></div>
                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-2xl shadow-lg">
                        <img src={item2} alt="" className='w-20 h-20 mt-10 bg-green-200 rounded-full p-3' />
                        <div className="text-2xl font-semibold">15{" "}<span className='text-xl font-normal'>Total Products</span></div>
                    </div>
                    {/* <div className="flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-2xl shadow-lg">
                        <img src={item4} alt="" className='w-20 h-20 mt-10 bg-green-200 rounded-full p-3' />
                        <div className="text-2xl font-semibold">357{" "}<span className='text-xl font-normal'>Total Orders</span></div>
                    </div>
                     <div className="flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-2xl shadow-lg">
                        <img src={item2} alt="" className='w-20 h-20 mt-10 bg-green-200 rounded-full p-3' />
                        <div className="text-2xl font-semibold">357{" "}<span className='text-xl font-normal'>Total Orders</span></div>
                    </div> */}
                </div>
                <div className="flex flex-col gap-3 bg-white my-7 p-5 rounded-lg shadow-lg">
                    <div className="flex justify-between">
                        <div className="font-semibold text-2xl">Recent Requests</div>
                        <div className="flex gap-3 items-center justify-center">
                            <input type="text" className='bg-gray-300 w-60 rounded-md px-3 font-normal text-lg' placeholder='search'  />
                            <i className='text-xl bx bx-search' ></i>
                        </div>
                    </div>
                    <table className=''>
                        <tr className='font-semibold font-center text-xl'>
                            <th className='px-6 py-3  text-xl font-semibold '>Request ID</th>
                            <th className='px-6 py-3  text-xl font-semibold '>Collecting center</th>
                            <th className='px-6 py-3  text-xl font-semibold '>Date</th>                           
                            <th className='px-6 py-3  text-xl font-semibold '>Request Status</th>
                            <th className='px-6 py-3  text-xl font-semibold '>Product</th>
                            <th className='px-6 py-3  text-xl font-semibold '>View</th>
                        </tr>
                        <tbody className='font-light text-center'>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-4 py-3 text-xl  '>007</td>
                                <td className='px-4 py-3 text-xl'>Kandy</td>
                                <td className='px-4 py-3 text-xl'>2024-04-12</td>                        
                                <td className='px-4 py-3 text-xl'><span className='text-green-600 font-semibold'>Processing</span></td>
                                <td className='px-4 py-3 text-xl'>Alba Cinnamon</td>
                                <td className='px-4 py-3 text-xl'><ion-icon name="eye-outline"></ion-icon></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-4 py-3 text-xl'>006</td>
                                <td className='px-4 py-3 text-xl'>Colombo</td>
                                <td className='px-4 py-3 text-xl'>2024-04-10</td>
                                <td className='px-4 py-3 text-xl'><span className='text-red-400 font-semibold'>Cancelled</span></td>
                                <td className='px-4 py-3 text-xl'>Green Pepper</td>
                                <td className='px-4 py-3 text-xl'><ion-icon name="eye-outline"></ion-icon></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-4 py-3 text-xl'>004</td>
                                <td className='px-4 py-3 text-xl'>Matara</td>
                                <td className='px-4 py-3 text-xl'>2024-04-04</td>
                                <td className='px-4 py-3 text-xl'><span className='text-green-00 font-semibold'>Processing</span></td>
                                <td className='px-4 py-3 text-xl'>Malabar Cardamom</td>
                                <td className='px-4 py-3 text-xl'><ion-icon name="eye-outline"></ion-icon></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default SupplierDash;