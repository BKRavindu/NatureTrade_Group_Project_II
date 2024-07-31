import React from 'react'
import NavBar from '../../components/admin/NavBar'
import SideBar from '../../components/admin/SideBar'
import profile from '../../assets/images.jpeg';
import { Link } from 'react-router-dom';

function ViewUser() {
  return (
    <>
        <NavBar />
        <div className="flex">
            <SideBar />
            <div className="flex flex-col flex-1 mr-3 ml-[250px]">
                <div className="flex flex-col">
                    <div className="font-semibold text-2xl mb-2 -mt-12 mb-5">View User</div>
                    <div className="flex flex-row gap-3">

                        <div className="font-normal text-gray-400 text-xl">Dashboard</div>{">"}
                        <div className="font-normal text-gray-400 text-xl">Users</div>{">"}
                        <div className="font-normal text-xl">View User</div>
                    </div>
                </div>
                <div className="flex gap-3-p-4 rounded-lg bg-white shadow-lg mt-4 p-10 gap-14 mr-4">
                    <img src={profile} alt="" className='w-[150px] h-[150px] rounded-full border border-8 border-gray-200  object-cover' />
                    <div className="h-40 border-l-2 border-gray-300 my-3 "></div>
                    <div className="flex flex-col gap-3 justify-center m-5">
                        <div className="font-semibold text-xl">John Doe</div>
                        <div className="text-lg font-normal text-blue-500 px-4 py-1 bg-blue-100 rounded-lg inline-block self-center -ml-40">Seller</div>
                        <div className="text-lg font-light">description</div>
                        <div className="flex gap-2 items-center justify-start">
                            <div className="text-sm font-lg px-3 py-1 border border-gray-300 rounded-lg">Send Email</div>
                            <div className="text-sm font-lg px-3 py-1 border border-gray-300 rounded-lg"><i className='bx bx-phone-call mr-1 self-center items-center ' ></i>Make a Call</div>
                        </div>
                    </div>

                </div>
            

                <div className="flex flex-col gap-4 bg-white rounded-lg shadow-lg p-5 mr-4 my-6 shadow-lg ">
                    <div className="border border-gray-200 flex flex-col rounded-lg mt-4 mx-6 ">
                        <div className="flex  p-4 rounded-lg justify-between">
                            <div className="text-lg font-semibold">Contact Me</div>
                            <div className="flex gap-2 pl-3 pr-4 py-1 rounded-xl items-center border border-gray-300">
                                <i className='bx bx-edit' ></i>
                                <Link to="/Admin/Profile">
                                    <div className="font-semibold text-lg">Edit</div>
                                </Link>
                                
                            </div>
                        </div>
                        <div className="flex justify-between items-start m-3">
                            <div className="font-normal text-lg text-gray-500">Email</div>
                            <div className="font-normal text-lg text-gray-500">Phone</div>
                            <div className="font-normal text-lg text-gray-500">Address</div>
                        </div>
                        <div className="flex justify-between items-end m-3 -mt-1 mb-8">
                            <div className="font-normal text-lg">Annamarie@naturetrade.com</div>
                            <div className="font-normal text-lg">(+94) 077-1234567</div>
                            <div className="font-normal text-lg">290 Chatham Way Reston, Maryland(lg), 20191</div>
                        </div>
                    </div>
                    <div className="border border-gray-200 flex flex-col rounded-lg mt-4 mx-6 mb-8 ">
                        <div className="flex  p-4 rounded-lg justify-between">
                            <div className="text-lg font-semibold">Social Links</div>
                            <div className="flex gap-2 pl-3 pr-4 py-1 rounded-xl items-center border border-gray-300">
                                <i className='bx bx-edit' ></i>
                                <div className="font-semibold text-lg">Edit</div>
                            </div>
                        </div>
                        <div className="flex justify-between p-4 mb-8">
                            <div className="flex gap-2 items-center justify-center text-gray-700">
                                <i className='bx bxl-facebook-circle text-lg' ></i>
                                <div className="font-normal text-lg">Facebook</div>
                            </div>
                            <div className="flex gap-2 items-center justify-center text-gray-700">
                                <i class='bx bxl-whatsapp text-lg' ></i>
                                <div className="font-normal text-lg">Whatsapp</div>
                            </div>
                            <div className="flex gap-2 items-center justify-center text-gray-700">
                                <i className='bx bxl-instagram text-lg' ></i>
                                <div className="font-normal text-lg">Instagram</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
        </div>
    </>
  )
}

export default ViewUser