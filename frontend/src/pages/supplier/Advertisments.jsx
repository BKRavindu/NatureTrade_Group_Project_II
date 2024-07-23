import React from 'react'
import SideBar from '../../components/supplier/SideBar'
import NavBar from '../../components/supplier/NavBar'
import logo from '../../assets/Untitled design (1) 1.svg';
import {Link} from 'react-router-dom'
const Advertisments = () => {
    return (
        <>
            <NavBar />
            <div className="flex">
                <SideBar />
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col">
                        <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Invoice</div>
                        <div className="flex flex-row gap-3">
    
                            <div className="font-normal text-gray-400 text-md">Dashboard</div>{">"}
                            <div className="font-normal text-md">Advertisment</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 m-3 bg-white px-5 mx-20 py-5 mx-20 max-w-3xl ml-[150px] mt-9 rounded-md">
                        <div className="flex  justify-between">
                            <div className="flex gap-2 items-center">
                                <img src={logo} alt="NatureTrade Logo" className='w-12 h-12' />
                                <div className="text-xl font-semibold text-center ml-3">NatureTrade</div>
                            </div>
                            <div className="flex gap-2 items-center">                        
                                <div className="font-light text-md mr-3">Posted Date : 2024-05-21</div>
                                <div className="font-light text-md">15:20:28</div>
                            </div>
                        </div>
                        <div className="flex flex-col border border-gray-300 p-5 px-10 mt-10">
                            <div className="flex gap-10">
                                <div className="flex flex-col">
                                    <div className="font-normal size-md ">Buyer:</div> 
                                    <div className="font-normal size-md">Advertisment Id:</div>
                                    <div className="font-normal size-md">Ordered product(s):</div>
                                </div>
                                <div className="flex flex-col">
                                    <span className=''>: Tvesha Lanka.pvt Ltd</span>
                                    <span className=''>: Ad002</span>
                                    <span className=''>: Cinnamon</span> 
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
                        <div className="font-normal text-xl my-3 ">Product details</div>
                        {/* <div className="flex flex-col gap-2 border border-gray-300 p-5 px-5">
                            <div className="font-light size-md">Spice 001</div>
                            <div className="size-md "><span className='font-semibold'>LKR 15000.00</span> | Quantity- 3 | Unit-Price- LKR 5000.00 </div>
                        </div> */}
                        <div className="flex flex-col border border-gray-300 p-5 px-10 mt-10">
                            <div className="flex gap-3">
                                <div className="flex flex-col">
                                    <div className="font-normal size-md ">Product Name</div>
                                    <div className="font-normal size-md ">Product Category</div>
                                    <div className="font-normal size-md ">Quantity</div>
                                    <div className="font-normal size-md ">Required Centers</div>                                    
                                    <div className="font-normal size-md">Required center(s)</div>
                                    <div className="font-normal size-md">Required Date</div>
                                </div>
                                <div className="flex flex-col">
                                <span className=''>:Cinnamon</span>
                                <span className=''>:Alba</span>
                                <span className=''>:25Kg</span>
                                    <span className=''>:Matara, Kandy, Rathnapura</span>
                                    <span className=''>:Matara, Kandy</span>
                                    <span className=''>:2021-06-05</span> 
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center p-10 px-20 bg-gray-100 mt-6 mb-6 ">
                            <div className="font-bold text-lg">Thank You for Choosing Nature Trade </div>
                            <div className="font-normal text-md text-center">
                                We appreciate your decision to trust NatureTrade for your spice needs. Our commitment is to provide exceptional quality and service.
                                <br /><span className='text-blue-400'>Visit Our Site </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
      )
    }
    
export default Advertisments