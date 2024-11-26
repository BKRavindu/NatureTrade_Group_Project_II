import React from 'react'
import BuyerNavBar from '../../components/Buyer/BuyerNavBar'
import BuyerSideBar from '../../components/Buyer/BuyerSideBar'
import logo from '../../assets/Untitled design (1) 1.svg';
import profile from '../../assets/BuyerProfile.jpg';

function BSelectOrder() {
  return (
    <>
        <BuyerNavBar />
        <div className="flex">
        <BuyerSideBar />
        <div className="flex flex-col flex-1 ">
                <div className="flex flex-col">
                    <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Get Order</div>
                    <div className="flex flex-row gap-3">


                        <div className="font-normal text-gray-400 text-md">Dashboard</div>{">"}
                        <div className="font-normal text-md">Store</div>{">"}
                        <div className="font-normal text-md">Get Order</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-3 mr-3 bg-white shadow-lg rounded-md">
                    <div className="flex justify-between p-3 mr-3">
                        <div className="flex flex-col gap-2 ml-3 mt-3">
                            <div className="font-semibold text-lg">Get Order</div>
                            <div className="font-normal text-md text-gray-400">Give your Order details here.</div>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between p-4 mr-3 mt-6 gap-2 ">
                        
                            <div className="flex gap-2 justify-between w-full border-b border-gray-100 p-4">
                                <div className="flex w-[750px]">
                                    <div className="font-normal text-lg  ">Product Name</div>
                                </div>
                                <div className="flex justify-end gap-10  w-full">
                                    <div className="flex gap-5 p-1 rounded-md  items-center justify-start  w-[300px] border border-2 border-gray bb-2 w-full">
                                        <input type="text" placeholder="Name" className="ml-2 border-none  focus:outline-none text-gray-500 font-light w-full " value={"ginger"} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 justify-between w-full border-b border-gray-100 p-4">
                                <div className="flex w-[750px]">
                                    <div className="font-normal text-lg  ">Quantity</div>
                                </div>
                                <div className="flex justify-end gap-10  w-full">
                                    <div className="flex gap-5 p-1 rounded-md  items-center justify-start  w-[300px] border border-2 border-gray bb-2 w-full">
                                        <input type="text" placeholder="Name" className="ml-2 border-none  focus:outline-none text-gray-500 font-light w-full " value={"10kg"} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 justify-between w-full border-b border-gray-100 p-4">
                                <div className="flex w-[750px]">
                                    <div className="font-normal text-lg  ">Price</div>
                                </div>
                                <div className="flex justify-end gap-10  w-full">
                                    <div className="flex gap-5 p-1 rounded-md  items-center justify-start  w-[300px] border border-2 border-gray bb-2 w-full">
                                        <input type="text" placeholder="Name" className="ml-2 border-none  focus:outline-none text-gray-500 font-light w-full " value={"rs 10000"} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 justify-between w-full border-b border-gray-100 p-4">
                                <div className="flex w-[750px]">
                                    <div className="font-normal text-lg  ">Available Centers</div>
                                </div>
                                <div className="flex justify-end gap-10  w-full">
                                    <div className="flex gap-5 p-1 rounded-md  items-center justify-start  w-[300px] border border-2 border-gray bb-2 w-full">
                                        <input type="text" placeholder="Name" className="ml-2 border-none  focus:outline-none text-gray-500 font-light w-full " value={"Center1"} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 justify-between w-full border-b border-gray-100 p-4">
                                <div className="flex w-[750px]">
                                    <div className="font-normal text-lg  ">Email</div>
                                </div>
                                <div className="flex justify-end gap-10  w-full">
                                    <div className="flex gap-5 p-1 rounded-md  items-center justify-start  w-[300px] border border-2 border-gray bb-2 w-full">
                                        <input type="text" placeholder="Name" className="ml-2 border-none  focus:outline-none text-gray-500 font-light w-full " value={"lakshi@gmail.com"} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 justify-between w-full border-b border-gray-100 p-4">
                                <div className="flex w-[750px]">
                                    <div className="font-normal text-lg ">Address</div>
                                </div>
                                <div className="flex justify-end gap-10 w-full">

                                    
                                    <div className="flex gap-5 p-1 rounded-md  items-center justify-start w-full  w-[300px] border border-2 border-gray bb-2">
                                        <input type="text" placeholder="Name" className="ml-2 border-none w-full  focus:outline-none text-gray-500 font-light " value={"No.45/75 Neelswood Road, Colombo 04"} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 justify-between w-full border-b border-gray-100 p-4">
                                <div className="flex w-[750px]">
                                    <div className="font-normal text-lg w-full ">Phone</div>
                                </div>
                                <div className="flex justify-end w-full gap-10">

                                    
                                    <div className="flex w-full gap-5 p-1 rounded-md  items-center justify-start  w-[300px] border border-2 border-gray bb-2">
                                        <input type="text" placeholder="Phone" className="ml-2 border-none focus:outline-none text-gray-500 font-light " value={"0776165909"} />
                                    </div>
                                </div>
                            </div>  

                    <div className="flex gap-2 justify-end items-end">
                        
                            <button className="font-normal text-xl border border-gray-500 border-2 bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-500 hover:text-white">Cancel</button>
                            <button className='font-normal border border-2 text-green-600 border-green-600 text-xl py-1 px-3 rounded-md hover:bg-green-600 hover:text-white'>
                               Save
                            </button>

                </div>
                  
                    </div>
                    
                </div>
                
                
            </div>
        </div>
    </>
  )
}

export default BSelectOrder