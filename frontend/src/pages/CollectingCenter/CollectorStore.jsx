import React from 'react'
import profile from '../../assets/images.jpeg';
import cinnamon from '../../assets/cinnamon.jpeg';
import clove from '../../assets/clove.jpeg';
import chilli from '../../assets/chilli.jpg';
import SideBar from '../../components/CollectingCenter/CollectorSideBar'
import NavBar from '../../components/CollectingCenter/CollectorNavBar'
import { FiEdit, FiEye, FiPhoneCall  } from "react-icons/fi";

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
                    <div className="font-semibold text-xl  -mt-12 mb-5">Store</div>
                    <div className="flex flex-row gap-3">

                    <div className="font-normal text-gray-400 text-md">Store</div>{">"}
                    <div className="font-normal text-md">Home</div>
                    </div>
                </div>
                <div className="flex justify-end p-2 bg-gray-100">
                    <div className="flex justify-center items-center p-2 bg-white mt-4 border-gray-300 rounded-2xl shadow-lg w-36 cursor-pointer">Add New Store</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white mt-4 border-gray-300 rounded-2xl shadow-lg">
                    <div className="flex flex-row justify-between gap-4 w-full">
                        <div className='flex-col justify-center p-2 pr-4 border-r-2  w-1/4' >
                            <div className='flex   items-center justify-center'>
                                <img src={profile} alt="Profile" style={{ width: '8rem', height: '8rem' }} className='rounded-full object-cover justify-center border-4 border-x-gray-200 shadow-sm' />
                            </div>
                            <div className="flex justify-center text-2xl mt-2 font-semibold">Colombo</div>
                            <div className="font-normal mt-2 ml-3"><span className='text-gray-500'>Manager:</span> Anna Marie</div>
                            <div className="font-normal mt-2 ml-3"><span className='text-gray-500'>Phone:</span> (+94)77-1234567</div>
                        </div>
                        <div className="flex flex-col border rounded-lg p-2 w-11/12">
                            <div className="flex  justify-between mb-2">
                                <div className="flex justify-center text-lg mt-2 font-semibold">Available Store</div>
                                <div className='flex justify-center border rounded-2xl pt-2 pb-2 pr-4 pl-4 shadow-lg'>View All</div>
                            </div>
                            <div className="grid  grid-cols-3 gap-6">
                                <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
                                    <div className="flex font-normal justify-center"><span className='text-gray-500'>Cinnamon:</span> 100KG</div>
                                    <div className="flex justify-center">
                                        <img src={cinnamon} alt="Cinnamon" style={{ width: '10rem', height: '7rem' }} className='object-fit justify-center ' />
                                    </div>
                                </div>
                                <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
                                    <div className="flex font-normal justify-center"><span className='text-gray-500'>Clove:</span> 100KG</div>
                                    <div className="flex justify-center">
                                        <img src={clove} alt="Cinnamon" style={{ width: '10rem', height: '7rem' }} className='object-fit justify-center ' />
                                    </div>
                                </div>
                                <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
                                    <div className="flex font-normal justify-center"><span className='text-gray-500'>Chilli:</span> 100KG</div>
                                    <div className="flex justify-center">
                                        <img src={chilli} alt="Cinnamon" style={{ width: '10rem', height: '7rem' }} className='object-fit justify-center' />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex m-2 border border-gray-300 rounded-lg shadow-lg items-center justify-center pl-4 pr-4 pt-1 pb-1 w-full cursor-pointer"><FiEye className='mr-2'/>View</div>
                            <div className="flex m-2 border border-gray-300 rounded-lg shadow-lg items-center justify-center pl-4 pr-4 pt-1 pb-1 w-full cursor-pointer"><FiPhoneCall  className='mr-2'/>Contact</div>
                            <div className="flex m-2 border border-gray-300 rounded-lg shadow-lg items-center justify-center pl-4 pr-4 pt-1 pb-1 w-full cursor-pointer"><FiEdit className='mr-2' />Edit</div>
                        </div>
                        
                    </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white mt-4 border-gray-300 rounded-2xl shadow-lg">
                    <div className="flex flex-row justify-between gap-4 w-full">
                        <div className='flex-col justify-center p-2 pr-4 border-r-2  w-1/4' >
                            <div className='flex   items-center justify-center'>
                                <img src={profile} alt="Profile" style={{ width: '8rem', height: '8rem' }} className='rounded-full object-cover justify-center border-4 border-x-gray-200 shadow-sm' />
                            </div>
                            <div className="flex justify-center text-2xl mt-2 font-semibold">Colombo</div>
                            <div className="font-normal mt-2 ml-3"><span className='text-gray-500'>Manager:</span> Anna Marie</div>
                            <div className="font-normal mt-2 ml-3"><span className='text-gray-500'>Phone:</span> (+94)77-1234567</div>
                        </div>
                        <div className="flex flex-col border rounded-lg p-2 w-11/12">
                            <div className="flex  justify-between mb-2">
                                <div className="flex justify-center text-lg mt-2 font-semibold">Available Store</div>
                                <div className='flex justify-center border rounded-2xl pt-2 pb-2 pr-4 pl-4 shadow-lg'>View All</div>
                            </div>
                            <div className="grid  grid-cols-3 gap-6">
                                <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
                                    <div className="flex font-normal justify-center"><span className='text-gray-500'>Cinnamon:</span> 100KG</div>
                                    <div className="flex justify-center">
                                        <img src={cinnamon} alt="Cinnamon" style={{ width: '10rem', height: '7rem' }} className='object-fit justify-center ' />
                                    </div>
                                </div>
                                <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
                                    <div className="flex font-normal justify-center"><span className='text-gray-500'>Clove:</span> 100KG</div>
                                    <div className="flex justify-center">
                                        <img src={clove} alt="Cinnamon" style={{ width: '10rem', height: '7rem' }} className='object-fit justify-center ' />
                                    </div>
                                </div>
                                <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
                                    <div className="flex font-normal justify-center"><span className='text-gray-500'>Chilli:</span> 100KG</div>
                                    <div className="flex justify-center">
                                        <img src={chilli} alt="Cinnamon" style={{ width: '10rem', height: '7rem' }} className='object-fit justify-center' />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex m-2 border border-gray-300 rounded-lg shadow-lg items-center justify-center pl-4 pr-4 pt-1 pb-1 w-full cursor-pointer"><FiEye className='mr-2'/>View</div>
                            <div className="flex m-2 border border-gray-300 rounded-lg shadow-lg items-center justify-center pl-4 pr-4 pt-1 pb-1 w-full cursor-pointer"><FiPhoneCall  className='mr-2'/>Contact</div>
                            <div className="flex m-2 border border-gray-300 rounded-lg shadow-lg items-center justify-center pl-4 pr-4 pt-1 pb-1 w-full cursor-pointer"><FiEdit className='mr-2' />Edit</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default CollectorStore