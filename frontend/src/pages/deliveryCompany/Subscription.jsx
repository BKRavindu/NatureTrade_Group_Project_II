import React from 'react'
import NavBar from '../../components/deliveryCompany/NavBar'
import SideBar from '../../components/deliveryCompany/SideBar'

function Subscription() {
  return (
    <>
        <NavBar />
        <div className="flex">
            <SideBar />
            <div className="flex flex-col flex-1">
                <div className="flex flex-col">
                        <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Subscription</div>
                        <div className="flex flex-row gap-3">

                            <div className="font-normal text-gray-400 text-md">Dashboard</div>{">"}

                            <div className="font-normal text-md">Subscription</div>
                        </div>
                </div>
                <div className="flex flex-col gap-2 bg-white p-5 my-4 mr-6 rounded-md shadow-lg">
                    <div className="font-semibold text-2xl mb-5 text-center">Subscription Plan</div>
                    <ul className="list-disc font-normal px-7">
                        <li>Manage your subscription plan for uninterrupted  service.</li>
                        <li>Duration: 6 Months</li>
                        <li>Activating the 6-month package is mandatory to receive services from our system.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 items-center p-5 bg-white shadow-lg mt-2 mr-6 rounded-md mb-3">
                    <div className="flex flex-col gap-2 items-center justify-center bg-gray-100 p-5 rounded-lg shadow-lg">
                        <div className="font-light text-grey-200 border border-grey-200 px-4 py-1 rounded-md text-center mb-4">Basic</div>
                        <div className="font-semibold text-center text-lg">LKR 15000/ <br></br>6months</div>
                        <div className="flex flex-col gap-2 my-5">
                            <div className="flex gap-2 items-center">
                                <i class='bx bx-check-circle text-green-500'></i>
                                <span>Access to exclusive spice varieties</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class='bx bx-check-circle text-green-500'></i>
                                <span>Priority customer support</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class='bx bx-check-circle text-green-500'></i>
                                <span>Monthly newsletters and updates</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class='bx bx-check-circle text-green-500'></i>
                                <span>benefit 1</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i class='bx bx-check-circle text-green-500'></i>
                                <span>benefit 2</span>
                            </div>
                        </div>
                        <div className="flex mt-8 -mb-2 shadow-lg text-white px-1 py-1 bg-blue-400 text-center rounded-md w-[150px] justify-center">Activate</div>
                    </div>


                </div>
            </div>
        </div>
    </>
  )
}

export default Subscription