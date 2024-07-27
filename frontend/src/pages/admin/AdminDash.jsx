import React from "react";
import NavBar from "../../components/admin/NavBar";
import SideBar from "../../components/admin/SideBar";
import MyChart from "../../components/admin/MyChart";
import HeaderPic from "../../assets/Undraw_admin_stat.svg";
import item1 from "../../assets/house-with-garden.svg";
import item2 from "../../assets/user-group.svg";
import item3 from "../../assets/revenue.svg";

export default function AdminDash() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar />

        <div className="flex p-2 flex-col flex-1 ml-[250px]">
          {/* header components================ */}
          <div className="flex flex-col">
            <div className="font-semibold text-xl mb-2 -mt-12 mb-5">
              Dashboard
            </div>

            <div className="flex flex-row gap-3">
              <div className="font-normal text-gray-400 text-md">Dashboard</div>
              {">"}
              <div className="font-normal text-md">Home</div>
            </div>
          </div>
          {/* ============================ */}

          {/* Hero welcome================ */}
          <div className="flex justify-between items-center p-4 bg-white mt-4 rounded-lg border-gray-300 rounded-2xl shadow-lg">
            <div className="flex flex-col gap-4 flex-col ml-20">
              <div className="text-6xl font-normal">
                Welcome, <span className="font-light text-2xl">Admin</span>
              </div>
              <div className="font-normal mt-5">
                You have <span className="text-red-500">3</span> Notification &{" "}
                <span className="text-red-500">7</span> Pending Approval.
              </div>
            </div>
            <img src={HeaderPic} alt="" className="w-[300px] h-[150px] mr-20" />
          </div>
          {/* ============================ */}

          {/* Features Section================ */}
          <div className="flex gap-4 justify-around items-center mt-4">
            <div className="flex flex-row gap-4 justify-center items-center mt-4 p-6 bg-white border-gray-300 rounded-2xl shadow-lg w-1/4">
              <img src={item1} alt="" className="w-20 h-20" />
              <div className="text-5xl font-bold">
                20 <span className="text-xl font-normal">Centers</span>
              </div>
            </div>

            <div className="flex flex-row gap-4 justify-center items-center mt-4 p-6 bg-white border-gray-300 rounded-2xl shadow-lg w-1/4">
              <img src={item2} alt="" className="w-20 h-20" />
              <div className="text-5xl font-bold">
                357 <span className="text-xl font-normal">Customer</span>
              </div>
            </div>

            <div className="flex flex-row gap-4 justify-center items-center mt-4 p-4 bg-white border-gray-300 rounded-2xl shadow-lg w-1/4">
              <img src={item3} alt="" className="w-24 h-24" />
              <div className="text-5xl font-bold">
                4M <span className="text-xl font-normal">Revenue</span>
              </div>
            </div>
          </div>
          {/* ============================ */}

          {/* Chart Section================ */}
          <div className="flex flex-col gap-3 bg-white my-7 p-5 rounded-lg shadow-lg">
            <div className="p-5">
            <div className="flex justify-between">
              <div className="font-semibold text-xl">Monthly Sales</div>
              <div className="font-normal text-gray-400">2024</div>
            </div>
            <div className="flex justify-center mt-10 h-64">
              <MyChart />
            </div>
            </div>
          </div>
          {/* ============================ */}
        </div>
      </div>
    </>
  );
}
