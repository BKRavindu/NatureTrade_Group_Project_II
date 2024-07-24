import React from "react";
import NavBar from "../../components/admin/NavBar";
import SideBar from "../../components/admin/SideBar";

export default function AdminDash() {
  const tr = {};
  return (
    <>
      <NavBar />
      <SideBar/>
      <div>AdminDash</div>
    </>
  );
}
