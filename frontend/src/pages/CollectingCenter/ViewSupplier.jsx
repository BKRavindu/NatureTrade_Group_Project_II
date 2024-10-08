import React from 'react'
import SideBar from '../../components/CollectingCenter/CollectorSideBar'
import NavBar from '../../components/CollectingCenter/CollectorNavBar'
import profile from '../../assets/images.jpeg';
import cinnamon from '../../assets/cinnamon.jpeg';
import clove from '../../assets/clove.jpeg';
import chilli from '../../assets/chilli.jpg';
import ginger from '../../assets/ginger.jpg';
import { Link } from 'react-router-dom';

function ViewProfile() {
  return (
    <>
        <NavBar />
        <div className="flex">
            <SideBar />
            <div className="flex flex-col flex-1 mr-3">
                <div className="flex flex-col">
                    <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Supplier Profile</div>
                    <div className="flex flex-row gap-3">

                        <div className="font-normal text-gray-400 text-md">Suppliers</div>{">"}
                        <div className="font-normal text-md">View Profile</div>
                    </div>
                </div>
                <div className="flex gap-3-p-4 rounded-lg bg-white shadow-md mt-4 p-10 gap-14 mr-4">
                    <img src={profile} alt="" className='w-[150px] h-[150px] rounded-full border border-8 border-gray-200  object-cover' />
                    <div className="h-40 border-l-2 border-gray-300 my-3 "></div>
                    <div className="flex flex-col gap-3 justify-center m-5">
                        <div className="font-semibold text-lg">Anna Marie</div>
                        <div className="text-md font-normal text-blue-500 px-4 py-1 bg-blue-100 rounded-lg inline-block self-center -ml-40">Supplier</div>
                        <div className="text-sm font-light">description</div>
                        <div className="flex gap-2 items-center justify-start">
                            <div className="text-sm font-normal px-3 py-1 border border-gray-300 rounded-lg"><i className='bx bx-phone-envelope mr-1 self-center items-center ' ></i>Send Email</div>
                            <div className="text-sm font-normal px-3 py-1 border border-gray-300 rounded-lg"><i className='bx bx-phone-call mr-1 self-center items-center ' ></i>Make a Call</div>
                        </div>
                    </div>

                </div>
            

                <div className="flex flex-col gap-4 bg-white rounded-lg shadow-lg p-5 mr-4 my-6 shadow-md ">
                    <div className="border border-gray-200 flex flex-col rounded-lg mt-4 mx-6 ">
                        <div className="flex  p-4 rounded-lg justify-between">
                            <div className="text-normal font-semibold">Contact Me</div>
                        </div>
                        <div className="flex justify-between items-start m-3">
                            <div className="font-normal text-md text-gray-500">Name</div>
                            <div className="font-normal text-md text-gray-500">Phone</div>
                            <div className="font-normal text-md text-gray-500">Email</div>
                        </div>
                        <div className="flex justify-between items-end m-3 -mt-1 mb-8">
                            <div className="font-normal text-md">Anna Marie</div>
                            <div className="font-normal text-md">(+94) 077-1234567</div>
                            <div className="font-normal text-md">Annamarie@naturetrade.com</div>
                        </div>
                        <div className="flex justify-between items-start m-3">
                            <div className="font-normal text-md text-gray-500">City</div>
                            <div className="font-normal text-md text-gray-500">Role</div>
                            <div className="font-normal text-md text-gray-500">Address</div>
                        </div>
                        <div className="flex justify-between items-end m-3 -mt-1 mb-8">
                            <div className="font-normal text-md">Kandy</div>
                            <div className="font-normal text-md">Supplier</div>
                            <div className="font-normal text-md">290 Chatham Way Reston, Maryland(MD), 20191</div>
                        </div>
                    </div>
                    <div className="border border-gray-200 flex flex-col rounded-lg mt-4 mx-6 ">
                        <div className="flex  p-4 rounded-lg justify-between">
                            <div className="text-normal font-semibold">Product Details</div>
                            <div className="flex gap-2 pl-3 pr-4 py-1 rounded-xl items-center border border-gray-300">
                                <i className='bx bx-edit' ></i>
                                <Link to="/Admin/Profile">
                                    <div className="font-semibold text-sm">View All</div>
                                </Link>
                                
                            </div>
                        </div>
                        <div className="flex justify-between items-start m-3">
                            <div className="flex flex-col justify-center items-center">
                                <div className="font-normal text-md text-gray-500">Cinnamon</div>
                                <div className="flex justify-center">
                                    <img src={cinnamon} alt="Cinnamon" style={{ width: '10rem', height: '7rem' }} className='object-fit justify-center ' />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="font-normal text-md text-gray-500">Ginger</div>
                                <div className="flex justify-center">
                                    <img src={ginger} alt="Cinnamon" style={{ width: '10rem', height: '7rem' }} className='object-fit justify-center ' />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="font-normal text-md text-gray-500">Chilli</div>
                                <div className="flex justify-center">
                                    <img src={chilli} alt="Cinnamon" style={{ width: '10rem', height: '7rem' }} className='object-fit justify-center ' />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="font-normal text-md text-gray-500">Cloves</div>
                                <div className="flex justify-center">
                                    <img src={clove} alt="Cinnamon" style={{ width: '10rem', height: '7rem' }} className='object-fit justify-center ' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-200 flex flex-col rounded-lg mt-4 mx-6 mb-8 ">
                        <div className="flex  p-4 rounded-lg justify-between">
                            <div className="text-normal font-semibold">Social Links</div>
                        </div>
                        <div className="flex justify-between p-4 mb-8">
                            <div className="flex gap-2 items-center justify-center text-gray-700">
                                <i className='bx bxl-facebook-circle text-lg' ></i>
                                <div className="font-normal text-md">Facebook</div>
                            </div>
                            <div className="flex gap-2 items-center justify-center text-gray-700">
                                <i class='bx bxl-whatsapp text-lg' ></i>
                                <div className="font-normal text-md">Whatsapp</div>
                            </div>
                            <div className="flex gap-2 items-center justify-center text-gray-700">
                                <i className='bx bxl-instagram text-lg' ></i>
                                <div className="font-normal text-md">Instagram</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
        </div>
    </>
  )
}

export default ViewProfile