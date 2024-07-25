import React from "react";
import NavBar from "../../components/admin/NavBar";
import SideBar from "../../components/admin/SideBar";

export default function AdminDash() {
  const tr = {};
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="flex flex-col flex-1 mx-[250px]">
          <div className="flex flex-col">
            <div className="font-semibold text-xl mb-2 -mt-12 mb-5">
              Dashboard
            </div>
            <div className="flex flex-row gap-3">
              <div className="font-normal text-gray-400 text-md">Dashboard</div>
              {">"}
              <div className="font-normal text-gray-400 text-md">Home</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
