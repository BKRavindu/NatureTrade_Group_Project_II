import React from "react";
import BuyerNavBar from "../../components/Buyer/BuyerNavBar";
import BuyerSideBar from "../../components/Buyer/BuyerSideBar";
import { Link } from 'react-router-dom'
import profile from '../../assets/BuyerProfile.jpg';

const BProfile = () => {
  return (
    <>
        <BuyerNavBar  />
        <div className="flex">
            <BuyerSideBar />
            <div className="flex flex-col flex-1 mr-3">
                <div className="flex flex-col">
                    <div className="font-semibold text-2xl mb-2 -mt-12 mb-5">Profile</div>
                    <div className="flex flex-row gap-3">

                        <div className="font-normal text-gray-400 text-xl">Dashboard</div>{">"}
                        <div className="font-normal text-xl">Profile</div>
                    </div>
                </div>
                <div className="flex gap-3-p-4 rounded-lg bg-white shadow-lg mt-4 p-10 gap-14 mr-4">
                    <img src={profile} alt="" className='w-[150px] h-[150px] rounded-full border border-8 border-gray-200  object-cover' />
                    <div className="h-40 border-l-2 border-gray-300 my-3 "></div>
                    <div className="flex flex-col gap-4 justify-center m-5">
                        <div className="font-semibold text-3xl">Lakshika</div>
                        <div className="text-xl font-semibold text-green-600 px-6 py-1 text-xl bg-blue-100 rounded-lg inline-block self-center -ml-45">Buyer</div>
                        <div className="flex gap-2 items-center justify-start">
                        <div className="flex gap-2 pl-3 pr-4 py-1 rounded-xl items-center border border-gray-300">
                                <i className='bx bx-edit text-xl font-semibold  ' ></i> 
                            <Link to="/Buyer/BEditProfile">
                                    <div className="font-semibold text-sm">Edit</div>
                            </Link>
                            </div>
                        </div> 
                    </div>

                </div>
            

                <div className="flex flex-col gap-4 bg-white rounded-lg shadow-lg p-5 mr-4 my-6 shadow-lg ">
                    <div className="border border-gray-200 flex flex-col rounded-lg mt-4 mx-6 ">
                        <div className="flex  p-4 rounded-lg justify-between">
                            <div className="text-xl font-semibold">Details</div>
                        </div>
                        <div className="flex justify-between items-start m-3">
    <div className="font-bold text-lg text-gray-500 w-1/3">Full Name</div>
    <div className="font-bold text-lg text-gray-500 w-1/3 text-center">Phone</div>
    <div className="font-bold text-lg text-gray-500 w-1/3 text-center ml-15">Email</div>
</div>
<div className="flex justify-between items-end m-3 -mt-1 mb-8">
    <div className="font-normal text-lg w-1/3">Lakshika</div>
    <div className="font-normal text-lg w-1/3 text-center">(+94) 77-1234567</div>
    <div className="font-normal text-lg w-1/3 text-center ml-15">lakshi@gmail.com</div>
</div>

<div className="flex justify-between items-start m-3">
    <div className="font-bold text-lg text-gray-500 w-1/3">Address</div>
    <div className="font-bold text-lg text-gray-500 w-1/3 text-center">Date of birth</div>
    <div className="font-bold text-lg text-gray-500 w-1/3 text-center ml-15">Role</div>
</div>
<div className="flex justify-between items-end m-3 -mt-1 mb-8">
    <div className="font-normal text-lg w-1/3">No.45/75 Neelswood Road, Colombo 04</div>
    <div className="font-normal text-lg w-1/3 text-center">2000-07-20</div>
    <div className="font-normal text-lg w-1/3 text-center ml-15">Buyer</div>
</div>
      
                    </div>
                    <div className="border border-gray-200 flex flex-col rounded-lg mt-4 mx-6 mb-8 ">
                        <div className="flex  p-4 rounded-lg justify-between">
                            <div className="text-normal text-xl font-semibold">Social Links</div>
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


export default BProfile;
