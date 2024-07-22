import React from 'react'
import SideBar from '../../components/supplier/SideBar'
import NavBar from '../../components/supplier/NavBar'
import { Link } from 'react-router-dom'
import profile from '../../assets/images.jpeg';

const SupplierProfile = () => {
  return (
    <>
        <NavBar />
        <div className="flex">
            <SideBar />
            <div className="flex flex-col flex-1 mr-3">
                <div className="flex flex-col">
                    <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Profile</div>
                    <div className="flex flex-row gap-3">

                        <div className="font-normal text-gray-400 text-lg">Dashboard</div>{">"}
                        <div className="font-normal text-lg">Profile</div>
                    </div>
                </div>
                <div className="flex gap-3-p-4 rounded-lg bg-white shadow-lg mt-4 p-10 gap-14 mr-4">
                    <img src={profile} alt="" className='w-[150px] h-[150px] rounded-full border border-8 border-gray-200  object-cover' />
                    <div className="h-40 border-l-2 border-gray-300 my-3 "></div>
                    <div className="flex flex-col gap-10 justify-center m-5">
                        <div className="font-semibold text-3xl">Micheal Green</div>
                        <div className="text-xl font-semibold text-green-600 px-6 py-1 text-2xl bg-blue-100 rounded-lg inline-block self-center -ml-45">Supplier</div>
                        {/* <div className="text-sm font-light">description</div> */}
                        {/* <div className="flex gap-2 items-center justify-start">
                            <div className="text-sm font-normal px-3 py-1 border border-gray-300 rounded-lg">Send Email</div>
                            <div className="text-sm font-normal px-3 py-1 border border-gray-300 rounded-lg"><i className='bx bx-phone-call mr-1 self-center items-center ' ></i>Make a Call</div>
                        </div> */}
                    </div>

                </div>
            

                <div className="flex flex-col gap-4 bg-white rounded-lg shadow-lg p-5 mr-4 my-6 shadow-lg ">
                    <div className="border border-gray-200 flex flex-col rounded-lg mt-4 mx-6 ">
                        <div className="flex  p-4 rounded-lg justify-between">
                            <div className="text-xl font-semibold">Details</div>
                            <div className="flex gap-2 pl-3 pr-4 py-1 rounded-xl items-center border border-gray-300">
                                <i className='bx bx-edit text-xl font-semibold' ></i>
                                {/* <Link to="/supplier/SupplierProfile">
                                    <div className="font-semibold text-sm">Edit</div>
                                </Link> */}
                                
                            </div>
                        </div>
                        <div className="flex justify-between items-start m-3">
    <div className="font-bold text-lg text-gray-500 w-1/3">Full Name</div>
    <div className="font-bold text-lg text-gray-500 w-1/3 text-center">Phone</div>
    <div className="font-bold text-lg text-gray-500 w-1/3 text-center ml-15">Email</div>
</div>
<div className="flex justify-between items-end m-3 -mt-1 mb-8">
    <div className="font-normal text-lg w-1/3">Micheal Jake Green</div>
    <div className="font-normal text-lg w-1/3 text-center">(+94) 077-1234567</div>
    <div className="font-normal text-lg w-1/3 text-center ml-15">MikeJ589@naturetrade.com</div>
</div>

<div className="flex justify-between items-start m-3">
    <div className="font-bold text-lg text-gray-500 w-1/3">Address</div>
    <div className="font-bold text-lg text-gray-500 w-1/3 text-center">Date of birth</div>
    <div className="font-bold text-lg text-gray-500 w-1/3 text-center ml-15">Role</div>
</div>
<div className="flex justify-between items-end m-3 -mt-1 mb-8">
    <div className="font-normal text-lg w-1/3">No.45/75 Neelswood Road, Colombo 04</div>
    <div className="font-normal text-lg w-1/3 text-center">1993-04-24</div>
    <div className="font-normal text-lg w-1/3 text-center ml-15">Supplier</div>
</div>
      
                    </div>
                    <div className="border border-gray-200 flex flex-col rounded-lg mt-4 mx-6 mb-8 ">
                        <div className="flex  p-4 rounded-lg justify-between">
                            <div className="text-normal text-xl font-semibold">Social Links</div>
                            <div className="flex gap-2 pl-3 pr-4 py-1 rounded-xl items-center border border-gray-300">
                                <i className='bx bx-edit font-semibold'  ></i>
                                <div className="text-xl font-semibold">Edit</div>
                            </div>
                        </div>
                        <div className="flex justify-between p-4 mb-8">
                            <div className="flex gap-2 items-center justify-center font-bold text-gray-700">
                                <i className='bx bxl-facebook-circle text-2xl' ></i>
                                <div className="font-normal text-xl">Facebook</div>
                            </div>
                            <div className="flex gap-2 items-center justify-center font-bold text-gray-700">
                                <i class='bx bxl-whatsapp text-2xl' ></i>
                                <div className="font-normal text-xl">Whatsapp</div>
                            </div>
                            <div className="flex gap-2 items-center justify-center font-bold text-gray-700">
                                <i className='bx bxl-instagram text-2xl' ></i>
                                <div className="font-normal text-xl">Instagram</div>
                            </div>
                            <div className="flex gap-2 items-center justify-center font-bold text-gray-700">
                                <i className='bx bxl-linkedin text-2xl' ></i>
                                <div className="font-normal text-xl">Linkedin</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


export default SupplierProfile;
