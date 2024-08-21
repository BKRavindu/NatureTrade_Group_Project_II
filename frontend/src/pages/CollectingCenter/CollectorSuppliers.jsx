import React from 'react'
import profile from '../../assets/images.jpeg';
import SideBar from '../../components/CollectingCenter/CollectorSideBar'
import NavBar from '../../components/CollectingCenter/CollectorNavBar'
import { FiEdit, FiEye, FiPhoneCall  } from "react-icons/fi";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function CollectorSuppliers() {

    const tr = {
        padding: '0.5rem',
        backgroundColor: '#f9f9f9',
        transition: 'background-color 0.3s',
      };

    return(
        <>
        <NavBar/>
        <div className='flex'>
            <SideBar/>
            <div className='flex p-2 flex-col flex-1'>
                <div className="flex flex-col">
                    <div className="font-semibold text-2xl  -mt-12 mb-5">Suppliers</div>
                    <div className="flex flex-row gap-3">

                    <div className="font-normal text-gray-400 text-xl">Suppliers</div>{">"}
                    <div className="font-normal text-xl">Home</div>
                    </div>
                </div>
                <div className='flex justify-between items-center p-2 bg-white mt-4 border-gray-300 rounded-2xl shadow-lg '>
                    <div className="grid  grid-cols-4 w-full">
                        <div className='flex-col justify-center px-4  border-r-2' >
                            <div className='flex   items-center justify-evenly '>
                                <img src={profile} alt="Profile" style={{ width: '8rem', height: '8rem' }} className='rounded-full object-cover justify-center border-4 border-x-gray-200 shadow-lg' />
                                <div className='flex flex-col justify-center items-center'>
                                    <div className="flex justify-center text-2xl mt-2 font-semibold">Anna Marie</div>
                                    <div className="mt-2 ml-3 font-medium  text-gray-700">Kandy</div>
                                </div>
                            </div>
                            <div className="flex justify-evenly items-center">
                                <div className="">
                                    <ul>
                                        <li>Cloves</li>
                                        <li>Cinnamon</li>
                                        <li>Ginger</li>
                                    </ul>
                                </div>
                                <div className="flex gap-2">
                                {[...Array(5)].map(star =>{
                                    return <BsFillStarFill size={20} className="text-yellow-400 fill-current"/>;
                                })}
                                </div>    
                            </div>
                            <div className="flex justify-evenly items-center">
                            <Link to="/Collector/CollectorSuppliers/ViewSupplier">
                                <div className="flex m-2 border border-gray-300 rounded-lg shadow-lg items-center justify-center pl-4 pr-4 pt-1 pb-1 w-full cursor-pointer"><FiEye className='mr-2'/>View</div>
                            </Link>    
                                <div className="flex m-2 border border-gray-300 rounded-lg shadow-lg items-center justify-center pl-4 pr-4 pt-1 pb-1 w-full cursor-pointer"><FiPhoneCall  className='mr-2'/>Contact</div>
                            </div>
                        </div>

                        <div className='flex-col justify-evenly px-4  border-r-2' >
                            <div className='flex   items-center justify-center '>
                                <img src={profile} alt="Profile" style={{ width: '8rem', height: '8rem' }} className='rounded-full object-cover justify-center border-4 border-x-gray-200 shadow-lg' />
                                <div className='flex flex-col justify-center items-center'>
                                    <div className="flex justify-center text-2xl mt-2 font-semibold">Anna Marie</div>
                                    <div className="mt-2 ml-3 font-medium  text-gray-700">Kandy</div>
                                </div>
                            </div>
                            <div className="flex justify-evenly items-center ">
                                <div className="">
                                    <ul>
                                        <li>Cloves</li>
                                        <li>Cinnamon</li>
                                        <li>Ginger</li>
                                    </ul>
                                </div>
                                <div className="flex gap-2">
                                {[...Array(5)].map(star =>{
                                    return <BsFillStarFill size={20} className="text-yellow-400 fill-current"/>;
                                })}
                                </div>    
                            </div>
                            <div className="flex justify-evenly items-center">
                                <div className="flex m-2 border border-gray-300 rounded-lg shadow-lg items-center justify-center pl-4 pr-4 pt-1 pb-1 w-full cursor-pointer"><FiEye className='mr-2'/>View</div>
                                <div className="flex m-2 border border-gray-300 rounded-lg shadow-lg items-center justify-center pl-4 pr-4 pt-1 pb-1 w-full cursor-pointer"><FiPhoneCall  className='mr-2'/>Contact</div>
                            </div>
                        </div>

                        <div className='flex-col justify-evenly px-4  border-r-2' >
                            <div className='flex   items-center justify-center '>
                                <img src={profile} alt="Profile" style={{ width: '8rem', height: '8rem' }} className='rounded-full object-cover justify-center border-4 border-x-gray-200 shadow-lg' />
                                <div className='flex flex-col justify-center items-center'>
                                    <div className="flex justify-center text-2xl mt-2 font-semibold">Anna Marie</div>
                                    <div className="mt-2 ml-3 font-medium  text-gray-700">Kandy</div>
                                </div>
                            </div>
                            <div className="flex justify-evenly items-center ">
                                <div className="">
                                    <ul>
                                        <li>Cloves</li>
                                        <li>Cinnamon</li>
                                        <li>Ginger</li>
                                    </ul>
                                </div>
                                <div className="flex gap-2">
                                {[...Array(5)].map(star =>{
                                    return <BsFillStarFill size={20} className="text-yellow-400 fill-current"/>;
                                })}
                                </div>    
                            </div>
                            <div className="flex justify-evenly items-center">
                                <div className="flex m-2 border border-gray-300 rounded-lg shadow-lg items-center justify-center pl-4 pr-4 pt-1 pb-1 w-full cursor-pointer"><FiEye className='mr-2'/>View</div>
                                <div className="flex m-2 border border-gray-300 rounded-lg shadow-lg items-center justify-center pl-4 pr-4 pt-1 pb-1 w-full cursor-pointer"><FiPhoneCall  className='mr-2'/>Contact</div>
                            </div>
                        </div>

                        <div className='flex-col justify-evenly px-4 ' >
                            <div className='flex   items-center justify-center'>
                                <img src={profile} alt="Profile" style={{ width: '8rem', height: '8rem' }} className='rounded-full object-cover justify-center border-4 border-x-gray-200 shadow-lg' />
                                <div className='flex flex-col justify-center items-center'>
                                    <div className="flex justify-center text-2xl mt-2 font-semibold">Anna Marie</div>
                                    <div className="mt-2 ml-3 font-medium  text-gray-700">Kandy</div>
                                </div>
                            </div>
                            <div className="flex justify-evenly items-center ">
                                <div className="">
                                    <ul>
                                        <li>Cloves</li>
                                        <li>Cinnamon</li>
                                        <li>Ginger</li>
                                    </ul>
                                </div>
                                <div className="flex gap-2">
                                {[...Array(5)].map(star =>{
                                    return <BsFillStarFill size={20} className="text-yellow-400 fill-current"/>;
                                })}
                                </div>    
                            </div>
                            <div className="flex justify-evenly items-center">
                                <div className="flex m-2 border border-gray-300 rounded-lg shadow-lg items-center justify-center pl-4 pr-4 pt-1 pb-1 w-full cursor-pointer"><FiEye className='mr-2'/>View</div>
                                <div className="flex m-2 border border-gray-300 rounded-lg shadow-lg items-center justify-center pl-4 pr-4 pt-1 pb-1 w-full cursor-pointer"><FiPhoneCall  className='mr-2'/>Contact</div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="flex flex-col gap-3 bg-white my-7 p-5 rounded-lg shadow-lg">
                    <div className="flex justify-between">
                        <div className="font-semibold text-xl">Suppliers</div>
                        <div className="flex gap-3 items-center justify-center">
                            <input type="text" className='bg-gray-300 w-60 rounded-md px-3' placeholder='search'  />
                            <i className='bx bx-search' ></i>
                        </div>
                    </div>
                    <table className=''>
                        <tr className='font-semibold font-center '>
                            <th className='px-6 py-3  text-lg font-semibold '>Supplier ID</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Name</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Email</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Contact Number</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Location</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Products</th>
                            <th className='px-6 py-3  text-lg font-semibold '>Action</th>
                        </tr>
                        <tbody className='font-light text-center'>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>

                                <td className='px-4 py-3 text-lg  '>S-007</td>
                                <td className='px-4 py-3 text-lg'>John Doe</td>
                                <td className='px-4 py-3 text-lg'>johndoe@gmail.com</td>
                                <td className='px-4 py-3 text-lg'>077-431-4590</td>
                                <td className='px-4 py-3 text-lg'>Kandy</td>
                                <td className='px-4 py-3 text-lg'>Cinnamon, Chiili</td>
                                <td className='flex justify-center px-4 py-3 text-lg'><FiEye className='m-2 cursor-pointer'/><FiPhoneCall  className='m-2 cursor-pointer'/></td>

                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-4 py-3 text-lg  '>S-007</td>
                                <td className='px-4 py-3 text-lg'>John Doe</td>
                                <td className='px-4 py-3 text-lg'>johndoe@gmail.com</td>
                                <td className='px-4 py-3 text-lg'>077-431-4590</td>
                                <td className='px-4 py-3 text-lg'>Kandy</td>
                                <td className='px-4 py-3 text-lg'>Cinnamon, Chiili</td>
                                <td className='flex justify-center px-4 py-3 text-lg'><FiEye className='m-2 cursor-pointer'/><FiPhoneCall  className='m-2 cursor-pointer'/></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-4 py-3 text-lg  '>S-007</td>
                                <td className='px-4 py-3 text-lg'>John Doe</td>
                                <td className='px-4 py-3 text-lg'>johndoe@gmail.com</td>
                                <td className='px-4 py-3 text-lg'>077-431-4590</td>
                                <td className='px-4 py-3 text-lg'>Kandy</td>
                                <td className='px-4 py-3 text-lg'>Cinnamon, Chiili</td>
                                <td className='flex justify-center px-4 py-3 text-lg'><FiEye className='m-2 cursor-pointer'/><FiPhoneCall  className='m-2 cursor-pointer'/></td>
                            </tr>
                            <tr className='bg-white hover:bg-gray-50 border-b border-gray-100'>
                                <td className='px-4 py-3 text-lg  '>S-007</td>
                                <td className='px-4 py-3 text-lg'>John Doe</td>
                                <td className='px-4 py-3 text-lg'>johndoe@gmail.com</td>
                                <td className='px-4 py-3 text-lg'>077-431-4590</td>
                                <td className='px-4 py-3 text-lg'>Kandy</td>
                                <td className='px-4 py-3 text-lg'>Cinnamon, Chiili</td>
                                <td className='flex justify-center px-4 py-3 text-lg'><FiEye className='m-2 cursor-pointer'/><FiPhoneCall  className='m-2 cursor-pointer'/></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
        
        </div>
        </div>
       </>
    ) 
}


export default CollectorSuppliers