import React from 'react'
import BuyerNavBar from '../../components/Buyer/BuyerNavBar'
import BuyerSideBar from '../../components/Buyer/BuyerSideBar'
import { Link } from 'react-router-dom'
import profile from '../../assets/images.jpeg';
import cinnamon from '../../assets/cinnamon.jpeg';
import clove from '../../assets/clove.jpeg';
import chilli from '../../assets/chilli.jpg';
import ginger from '../../assets/ginger.jpg';


function BCollectorProfile() {
  return (
    <>
    <BuyerNavBar />
    <div className="flex">
        <BuyerSideBar/>
        <div className="flex flex-col flex-1 mr-3">
            <div className="flex flex-col">
                <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Collector Profile</div>
                <div className="flex flex-row gap-3">

                    <div className="font-normal text-gray-400 text-md">Dashbord</div>{">"}
                    <div className="font-normal text-md">Collecting Center</div>{">"}
                    <div className="font-normal text-md"> Collector Profile</div>
                </div>
            </div>
            <div className="flex gap-3-p-4 rounded-lg bg-white shadow-md mt-4 p-10 gap-14 mr-4">
                <img src={profile} alt="" className='w-[150px] h-[150px] rounded-full border border-8 border-gray-200  object-cover' />
                <div className="h-40 border-l-2 border-gray-300 my-3 "></div>
                <div className="flex flex-col gap-3 justify-center m-5">
                    <div className="font-semibold text-lg">John Doe</div>
                    <div className="text-xl font-semibold text-green-600 px-6 py-1 text-xl bg-blue-100 rounded-lg inline-block self-center -ml-45">Collecting Center</div>
                    <div className="text-sm font-light">Colombo, Kulunegala, Mathara</div>
                </div>

            </div>
        

            <div className="flex flex-col gap-4 bg-white rounded-lg shadow-lg p-5 mr-4 my-6 shadow-md ">
                <div className="border border-gray-200 flex flex-col rounded-lg mt-4 mx-6 ">
                    <div className="flex  p-4 rounded-lg justify-between">
                        <div className="text-normal font-semibold">Contact Me</div>
                        
                    </div>
                    <div className="flex justify-between items-start m-3">
                        <div className="font-normal text-md text-gray-500">Email</div>
                        <div className="font-normal text-md text-gray-500">Phone</div>
                        <div className="font-normal text-md text-gray-500">Address</div>
                    </div>
                    <div className="flex justify-between items-end m-3 -mt-1 mb-8">
                        <div className="font-normal text-md">Annamarie@naturetrade.com</div>
                        <div className="font-normal text-md">(+94) 077-1234567</div>
                        <div className="font-normal text-md">290 Chatham Way Reston, Maryland(MD), 20191</div>
                    </div>
                </div>
                <div className="border border-gray-200 flex flex-col rounded-lg mt-4 mx-6 ">
                    <div className="flex  p-4 rounded-lg justify-between">
                        <div className="text-normal font-semibold">Stock</div>
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

export default BCollectorProfile
