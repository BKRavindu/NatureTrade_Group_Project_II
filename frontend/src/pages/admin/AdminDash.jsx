import React from "react";
import NavBar from "../../components/admin/NavBar";
import SideBar from "../../components/admin/SideBar";
import HeaderPic from "../../assets/Undraw_admin_stat.svg";
export default function AdminDash() {
  
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="flex p-2 flex-col flex-1 ml-[250px]">

          <div className="flex flex-col">

            <div className="font-semibold text-xl mb-2 -mt-12 mb-5">
              Dashboard
            </div>

            <div className="flex flex-row gap-3">
              <div className="font-normal text-gray-400 text-md">Dashboard</div>{">"}
              <div className="font-normal text-md">Home</div>
            </div>

          </div>

          <div className="flex justify-between items-center p-4 bg-white mt-4 rounded-lg border-gray-300 rounded-2xl shadow-lg">
                    <div className="flex flex-col gap-4 flex-col">
                        <div className="text-6xl font-normal">Hello, <span className='font-light text-2xl'>John!</span></div>
                        <div className="font-normal mt-5">You have <span className='text-red-500'>5</span> orders today.</div>
                    </div>
                    <img src={HeaderPic} alt="" className='w-[300px] h-[150px]'   />

                </div>

        </div>

      </div>
    </>
  );
}
