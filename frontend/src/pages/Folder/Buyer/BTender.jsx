import React from 'react'
import BuyerNavBar from '../../components/Buyer/BuyerNavBar'
import BuyerSideBar from '../../components/Buyer/BuyerSideBar'
import Cardamon from '../../assets/Cardamon.jpg';

function BTender() {
  return (
    <>
    <BuyerNavBar />
    <div className="flex">
    <BuyerSideBar />
    <div className="flex flex-col flex-1 ">
            <div className="flex flex-col">
                <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Tender</div>
                <div className="flex flex-row gap-3">


                    <div className="font-normal text-gray-400 text-md">Dashboard</div>{">"}

                    <div className="font-normal text-md">Tender</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-3 mr-3 bg-white shadow-lg rounded-md">
                <div className="flex justify-between p-3 mr-3">
                    <div className="flex flex-col gap-2 ml-3 mt-3">
                        <div className="font-semibold text-lg">Info</div>
                    </div>
                    <div className="flex gap-2 justify-end items-end">
                        <button className="font-normal text-xl border border-gray-500 border-2 bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-500 hover:text-white">Cancel</button>
                        <button className='font-normal border border-2 text-green-600 border-green-600 text-xl py-1 px-3 rounded-md hover:bg-green-600 hover:text-white'>
                            Update
                        </button>

                    </div>

                </div>
                <div className="flex flex-col justify-between p-4 mr-3 mt-6 gap-2 ">
                    
                <div className="flex gap-2 justify-between w-full border-b border-gray-100 p-4">
                            <div className="flex w-[750px]">
                                <div className="font-normal text-lg  ">Current Price</div>
                            </div>
                            <div className="flex justify-end gap-10  w-full">
                                <div className="flex gap-5 p-1 rounded-md  items-center justify-start  w-[300px] border border-2 border-gray bb-2 w-full">
                                    <input type="text" placeholder="Name" className="ml-2 border-none  focus:outline-none text-gray-500 font-light w-full " value={"20000"} />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-between w-full border-b border-gray-100 p-4">
                            <div className="flex w-[750px]">
                                <div className="font-normal text-lg  ">Product Name</div>
                            </div>
                            <div className="flex justify-end gap-10  w-full">
                                <div className="flex gap-5 p-1 rounded-md  items-center justify-start  w-[300px] border border-2 border-gray bb-2 w-full">
                                    <input type="text" placeholder="Name" className="ml-2 border-none  focus:outline-none text-gray-500 font-light w-full " value={"Cinnomon"} />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-between w-full border-b border-gray-100 p-4">
                            <div className="flex w-[750px]">
                                <div className="font-normal text-lg ">Descripption</div>
                            </div>
                            <div className="flex justify-end gap-10 w-full">

                                
                                <div className="flex gap-5 p-1 rounded-md  items-center justify-start w-full  w-[300px] border border-2 border-gray bb-2">
                                    <input type="text" placeholder="Name" className="ml-2 border-none w-full  focus:outline-none text-gray-500 font-light " value={"abc"} />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-between w-full border-b border-gray-100 p-4">
                            <div className="flex w-[750px]">
                                <div className="font-normal text-lg w-full ">Product Type</div>
                            </div>
                            <div className="flex justify-end w-full gap-10">

                                
                                <div className="flex w-full gap-5 p-1 rounded-md  items-center justify-start  w-[300px] border border-2 border-gray bb-2">
                                    <input type="text" placeholder="Phone" className="ml-2 border-none focus:outline-none text-gray-500 font-light " value={"product type"} />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-between w-full border-b border-gray-100 p-4">
                            <div className="flex w-[750px]">
                                <div className="font-normal text-lg w-full ">Starting Price</div>
                            </div>
                            <div className="flex justify-end w-full gap-10">

                                
                                <div className="flex w-full gap-5 p-1 rounded-md  items-center justify-start  w-[300px] border border-2 border-gray bb-2">
                                    <input type="text" placeholder="Phone" className="ml-2 border-none focus:outline-none text-gray-500 font-light " value={"Rs 19000"} />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-between w-full border-b border-gray-100 p-4">
                            <div className="flex w-[750px]">
                                <div className="font-normal text-lg w-full ">Start Date</div>
                            </div>
                            <div className="flex justify-end w-full gap-10">

                                
                                <div className="flex w-full gap-5 p-1 rounded-md  items-center justify-start  w-[300px] border border-2 border-gray bb-2">
                                    <input type="text" placeholder="Phone" className="ml-2 border-none focus:outline-none text-gray-500 font-light " value={"2024-07-30"} />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-between w-full border-b border-gray-100 p-4">
                            <div className="flex w-[750px]">
                                <div className="font-normal text-lg w-full ">End Date</div>
                            </div>
                            <div className="flex justify-end w-full gap-10">

                                
                                <div className="flex w-full gap-5 p-1 rounded-md  items-center justify-start  w-[300px] border border-2 border-gray bb-2">
                                    <input type="text" placeholder="Phone" className="ml-2 border-none focus:outline-none text-gray-500 font-light " value={"2024-08-15"} />
                                </div>
                            </div>
                        </div>
                        
                        
                          
                        
                </div>
                <div className="flex justify-between m-3 p-3 items-center">
                    <div className="flex gap-2 items-start flex-col">
                        <div className="font-normal text-lg">Photo</div>
                    </div>
                    <img src={Cardamon} alt="" className='w-[150px] h-[150px] -ml-20  border border-2 border-gray-200  object-cover' />
                     <div className="flex flex-col items-center gap-4 border border-2 border-black-600 px-2 rounded-lg">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <i className='bx bx-camera text-xl font-light '></i>
                            <input type="file" className="hidden" />
                            <span className="font-light bg-blue-100 rounded-md px-1 m-2">Choose a photo</span>
                        </label>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</>
  )
}

export default BTender
