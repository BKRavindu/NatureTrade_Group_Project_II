import React from 'react'
import profile from '../../assets/images.jpeg';
import cinnamon from '../../assets/cinnamon.jpeg';
import clove from '../../assets/clove.jpeg';
import chilli from '../../assets/chilli.jpg';
import SideBar from '../../components/CollectingCenter/CollectorSideBar'
import NavBar from '../../components/CollectingCenter/CollectorNavBar'
import { FiEdit, FiEye, FiPhoneCall  } from "react-icons/fi";
import { Link } from 'react-router-dom';

function CollectorStore() {

    const tr = {
        padding: '0.5rem',
        backgroundColor: '#f9f9f9',
        transition: 'background-color 0.3s',
      };

    return(
        <>
        <NavBar/>
        <div className='flex'>
            <SideBar/>
            <div className='flex p-2 flex-col flex-1'>
                <div className="flex flex-col">
                    <div className="font-semibold text-xl  -mt-12 mb-5">Advertisements</div>
                    <div className="flex flex-row gap-3">

                    <div className="font-normal text-gray-400 text-md">Advertisements</div>{">"}
                    <div className="font-normal text-md">Home</div>
                    </div>
                </div>
                <div className="flex justify-end p-2 bg-gray-100">
                    <Link to="/Collector/CollectorAdvertisements/CreateAdvertisement">
                        <div className="flex justify-center items-center p-2 pr-4 pl-4 bg-white mt-4 border-gray-300 rounded-2xl shadow-lg cursor-pointer">Create an Advertisement</div>
                    </Link>
                </div>
                <div className="flex justify-between items-center p-4 bg-white mt-4 border-gray-300 rounded-2xl shadow-lg">
                    <div className="flex flex-row justify-between gap-10 w-full">
                        <div className='flex-col justify-center p-2 pr-4 border-r-2  w-1/2' >
                            <div className='flex   items-center justify-center'>
                                <img src={cinnamon} alt="ProductImg" className='object-cover justify-center  shadow-sm' />
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-lg p-2 w-11/12 gap-2">
                            <div className='text-2xl font-semibold'>Cinnamon</div>
                            <div>Immeadiatly looking for a Supplier who have Cinnamon</div>
                            <div className='text-xl text-red-600 font-semibold'>50KG</div>
                            <div className="text-xl text-blue-500">29 days 8 hours 59 minutes 44 seconds</div>
                            <div className='flex gap-8'>
                                <div className="flex justify-center items-center p-2 pr-4 pl-4 bg-blue-100 mt-4 border-gray-300 rounded-2xl shadow-lg cursor-pointer">Edit Advertisement</div>
                                <div className="flex justify-center items-center p-2 pr-4 pl-4 bg-blue-100 mt-4 border-gray-300 rounded-2xl shadow-lg cursor-pointer">View Requests</div>
                            </div>

                        </div>
                        
                    </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-white mt-4 border-gray-300 rounded-2xl shadow-lg">
                    <div className="flex flex-row justify-between gap-10 w-full">
                        <div className='flex-col justify-center p-2 pr-4 border-r-2  w-1/2' >
                            <div className='flex   items-center justify-center'>
                                <img src={clove} alt="ProductImg" className='object-cover justify-center  shadow-sm' />
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-lg p-2 w-11/12 gap-2">
                            <div className='text-2xl font-semibold'>Cloves</div>
                            <div>Immeadiatly looking for a Supplier who have Cloves</div>
                            <div className='text-xl text-red-600 font-semibold'>50KG</div>
                            <div className="text-xl text-blue-500">29 days 8 hours 59 minutes 44 seconds</div>
                            <div className='flex gap-8'>
                                <div className="flex justify-center items-center p-2 pr-4 pl-4 bg-blue-100 mt-4 border-gray-300 rounded-2xl shadow-lg cursor-pointer">Edit Advertisement</div>
                                <div className="flex justify-center items-center p-2 pr-4 pl-4 bg-blue-100 mt-4 border-gray-300 rounded-2xl shadow-lg cursor-pointer">View Requests</div>
                            </div>

                        </div>
                        
                    </div>
                </div>
                

                <div className="flex justify-between items-center p-4 bg-white mt-4 border-gray-300 rounded-2xl shadow-lg">
                    <div className="flex flex-row justify-between gap-10 w-full">
                        <div className='flex-col justify-center p-2 pr-4 border-r-2  w-1/2' >
                            <div className='flex   items-center justify-center'>
                                <img src={chilli} alt="ProductImg" className='object-cover justify-center shadow-sm' />
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-lg p-2 w-11/12 gap-2">
                            <div className='text-2xl font-semibold'>Chilli</div>
                            <div>Immeadiatly looking for a Supplier who have Chilli</div>
                            <div className='text-xl text-red-600 font-semibold'>50KG</div>
                            <div className="text-xl text-blue-500">29 days 8 hours 59 minutes 44 seconds</div>
                            <div className='flex gap-8'>
                                <div className="flex justify-center items-center p-2 pr-4 pl-4 bg-blue-100 mt-4 border-gray-300 rounded-2xl shadow-lg cursor-pointer">Edit Advertisement</div>
                                <div className="flex justify-center items-center p-2 pr-4 pl-4 bg-blue-100 mt-4 border-gray-300 rounded-2xl shadow-lg cursor-pointer">View Requests</div>
                            </div>

                        </div>
                        
                    </div>
                </div>
                
                        
                              
                
            </div>
        </div>
        </>
    )
}


export default CollectorStore