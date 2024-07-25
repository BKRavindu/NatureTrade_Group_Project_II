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
          <div>admin dash</div>
        </div>
      </div>
    </>
  );
}
