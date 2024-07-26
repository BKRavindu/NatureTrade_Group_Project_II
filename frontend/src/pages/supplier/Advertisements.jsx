import React from 'react'
import SideBar from '../../components/supplier/SideBar'
import NavBar from '../../components/supplier/NavBar'
import logo from '../../assets/Untitled design (1) 1.svg';
import {Link} from 'react-router-dom'
const Advertisements = () => {
    return (
        <>
            <NavBar />
            <div className="flex">
                <SideBar />
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col">
                        <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Advertisement</div>
                        <div className="flex flex-row gap-3">
    
                            <div className="font-normal text-gray-400 text-xl">Dashboard</div>{">"}
                            <div className="font-normal text-xl">Advertisement</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 m-3 bg-white px-5 mx-20 py-5 mx-20 max-w-3xl ml-[150px] mt-9 rounded-md">
                        <div className="flex  justify-between">
                            <div className="flex gap-2 items-center">
                                <img src={logo} alt="NatureTrade Logo" className='w-12 h-12' />
                                <div className="text-2xl font-semibold text-center ml-3">NatureTrade</div>
                            </div>
                            <div className="flex gap-2 items-center">                        
                                <div className="font-light text-lg mr-3">Posted Date : 2024-05-21</div>
                                <div className="font-light text-lg">15:20:28</div>
                            </div>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-5 px-10 mt-10">
                            <div className="flex gap-10">
                                <div className="flex flex-col">
                                    <div className="font-normal size-md text-lg">Buyer:</div> 
                                    <div className="font-normal size-md text-lg">Advertisement Id:</div>
                                    <div className="font-normal size-md text-lg">Ordered product(s):</div>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-lg'>: Tvesha Lanka.pvt Ltd</span>
                                    <span className='text-lg'>: Ad002</span>
                                    <span className='text-lg'>: Cinnamon</span> 
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex gap-1 justify-between mt-3">
                            <div className="flex flex-col gap-10 bg-gray-100 w-full px-4 py-4">
                                <div className="flex flex-col">
                                    <div className="font-semibold">Name</div>
                                    <div className="font-light">Abdulla</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-semibold">Email</div>
                                    <div className="font-light">abdnasar@gmail.com</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 bg-gray-100 w-full px-4 py-4">
                                <div className="flex flex-col">
                                    <div className="font-semibold">Phone</div>
                                    <div className="font-light">+94712345678</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-semibold">Address</div>
                                    <div className="font-light">No. 123, Colombo 7</div>
                                </div>
                            </div>
                        </div> */}
                        {/* product item start */}
                        <div className="font-normal text-2xl my-3 ">Product details</div>
                        {/* <div className="flex flex-col gap-2 border border-gray-300 p-5 px-5">
                            <div className="font-light size-md">Spice 001</div>
                            <div className="size-md "><span className='font-semibold'>LKR 15000.00</span> | Quantity- 3 | Unit-Price- LKR 5000.00 </div>
                        </div> */}
                        <div className="flex flex-col border border-gray-300 p-5 px-10 mt-10">
                            <div className="flex gap-3">
                                <div className="flex flex-col">
                                    <div className="font-normal size-md text-lg">Product Name</div>
                                    <div className="font-normal size-md text-lg">Product Category</div>
                                    <div className="font-normal size-md text-lg">Quantity</div>
                                    <div className="font-normal size-md text-lg">Required Centers</div>                                    
                                    <div className="font-normal size-md text-lg">Required center(s)</div>
                                    <div className="font-normal size-md text-lg">Required Date</div>
                                </div>
                                <div className="flex flex-col">
                                <span className='text-lg'>:Cinnamon</span>
                                <span className='text-lg'>:Alba</span>
                                <span className='text-lg'>:25Kg</span>
                                    <span className='text-lg'>:Matara, Kandy, Rathnapura</span>
                                    <span className='text-lg'>:Matara, Kandy</span>
                                    <span className='text-lg'>:2021-06-05</span> 
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center p-10 px-20 bg-gray-100 mt-6 mb-6 ">
                            <div className="font-bold text-xl">Thank You for Choosing Nature Trade </div>
                            <div className="font-normal text-lg text-center">
                                We appreciate your decision to trust NatureTrade for your spice needs. Our commitment is to provide exceptional quality and service.
                                <br /><span className='text-blue-400 text-lg'>Visit Our Site </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
      )
    }
    
export default Advertisements
