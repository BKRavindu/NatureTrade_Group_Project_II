import React from 'react'
import BuyerNavBar from "../../components/Buyer/BuyerNavBar";
import BuyerSideBar from "../../components/Buyer/BuyerSideBar";
import logo from '../../assets/Untitled design (1) 1.svg';

function BOrderView() {
  return (
    <>
        <BuyerNavBar />
        <div className="flex">
            <BuyerSideBar />
            <div className="flex flex-col flex-1">
                <div className="flex flex-col">
                    <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Invoice</div>
                    <div className="flex flex-row gap-3">

                        <div className="font-normal text-gray-400 text-md">Dashboard</div>{">"}
                        <div className="font-normal text-gray-400 text-md">Delivery</div>{">"}
                        <div className="font-normal text-md">Invoice</div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 m-3 bg-white px-5 mx-20 py-5 mx-20 max-w-3xl ml-[150px] mt-9 rounded-md">
                    <div className="flex  justify-between">
                        <div className="flex gap-2 items-center">
                            <img src={logo} alt="NatureTrade Logo" className='w-12 h-12' />
                            <div className="text-xl font-semibold text-center ml-3">NatureTrade</div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="font-light text-md mr-3">2024-05-21</div>
                            <div className="font-light text-md">15:20:28</div>
                        </div>
                    </div>
                    <div className="flex flex-col border border-gray-300 p-5 px-10 mt-10">
                        <div className="flex gap-10">
                            <div className="flex flex-col">
                                <div className="font-normal size-md ">Order:</div> 
                                <div className="font-normal size-md">Invoice Id:</div>
                                <div className="font-normal size-md">Order Amount:</div>
                            </div>
                            <div className="flex flex-col">
                                <span className='text-green-500 '>Success</span>
                                <span className=''>003</span>
                                <span className=''>LKR 15000.00</span> 
                            </div>
                        </div>
                        

                        

                    </div>
                    <div className="flex gap-1 justify-between mt-3">
                        <div className="flex flex-col gap-10 bg-gray-100 w-full px-4 py-4">
                            <div className="flex flex-col">
                                <div className="font-semibold">Name</div>
                                <div className="font-light">Lakshi</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-semibold">Email</div>
                                <div className="font-light">lakshi@gmail.com</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-10 bg-gray-100 w-full px-4 py-4">
                            <div className="flex flex-col">
                                <div className="font-semibold">Phone</div>
                                <div className="font-light">+9477-1234567</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-semibold">Address</div>
                                <div className="font-light">No.45/75 Neelswood Road, Colombo 04</div>
                            </div>
                        </div>
                    </div>
                    {/* product item start */}
                    <div className="font-normal text-xl my-3 ">Product Items</div>
                    <div className="flex flex-col gap-2 border border-gray-300 p-5 px-5">
                        <div className="font-light size-md">Ginger</div>
                        <div className="size-md "><span className='font-semibold'>LKR 15000.00</span> | Quantity- 3 | Unit-Price- LKR 5000.00 </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-10 px-20 bg-gray-100 mt-6 mb-6 ">
                        <div className="font-bold text-lg">Thank You for Choosing Our Company </div>
                        <div className="font-normal text-md text-center">
                            We appreciate your decision. 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BOrderView
