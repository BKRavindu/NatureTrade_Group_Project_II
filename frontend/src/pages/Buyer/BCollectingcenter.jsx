import React from 'react'
import BuyerNavBar from '../../components/Buyer/BuyerNavBar'
import BuyerSideBar from '../../components/Buyer/BuyerSideBar'
import { Link } from 'react-router-dom'

function BCollectingcenter() {
  return (
    <>
        <BuyerNavBar />
        <div className="flex">
            <BuyerSideBar />
            <div className="flex flex-col flex-1 ">
                <div className="flex flex-col">
                        <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Collecting Center</div>
                        <div className="flex flex-row gap-3">

                            <div className="font-normal text-gray-400 text-md">Dashboard</div>{">"}
                            <div className="font-normal text-md">Collecting Center</div>
                        </div>
                </div>
                <div className="flex flex-col gap-3 bg-white my-7 p-5 rounded-lg shadow-lg p-8 pt-5">
                    <div className="flex justify-between">
                        <div className="font-semibold text-xl">Collecting Center</div>
                        <div className="flex gap-3 items-center justify-center">
                            <input type="text" className='bg-gray-300 w-60 rounded-md px-3' placeholder='search'  />
                            <i className='bx bx-search' ></i>
                        </div>
                    </div>
                    <table className=''>
                        <tr className='font-semibold font-center '>
                            <th className='px-6 py-3  text-lg font-semibold '>Center ID</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Center Name</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Action</th>
                            
                        </tr>
                        <tbody className='font-light text-center'>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-lg  '>007</td>
                                <td className='px-8 py-5 text-lg'>Green Fiber</td>
                                <td className='px-4 py-3 text-lg'>
                                <Link to="/Buyer/BCollectorProfile">
                                <ion-icon name="eye-outline"></ion-icon>
                            </Link>
                                </td>
                                
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-lg'>006</td>
                                <td className='px-8 py-5 text-lg'> Circular Collectors</td>
                                <td className='px-4 py-3 text-lg'>
                                <Link to="/Buyer/BCollectorProfile">
                                <ion-icon name="eye-outline"></ion-icon>
                            </Link>
                                </td>
                               
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-lg'>004</td>
                                <td className='px-8 py-5 text-lg'>Eco Collect</td>
                                <td className='px-4 py-3 text-lg'>
                                <Link to="/Buyer/BCollectorProfile">
                                <ion-icon name="eye-outline"></ion-icon>
                            </Link>
                                </td>
                                
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-lg'>007</td>
                                <td className='px-8 py-5 text-lg'>Green Cycle</td>
                                <td className='px-4 py-3 text-lg'>
                                <Link to="/Buyer/BCollectorProfile">
                                <ion-icon name="eye-outline"></ion-icon>
                            </Link>
                                </td>
                                
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-8 py-5 text-lg'>014</td>
                                <td className='px-8 py-5 text-lg'>Unity Hub</td>
                                <td className='px-4 py-3 text-lg'>
                                <Link to="/Buyer/BCollectorProfile">
                                <ion-icon name="eye-outline"></ion-icon>
                            </Link>
                                </td>
                                
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
                
        </div>
    </>
  )
}

export default BCollectingcenter