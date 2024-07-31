import React from 'react';
import Logo from '../../assets/Logo.png'; // Adjust the path if needed
import SideBar from '../../components/supplier/SideBar';
import NavBar from '../../components/supplier/NavBar';

const Requestform = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 w-full">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
            <div className="flex items-center justify-center mb-6">
              <img src={Logo} alt="Logo" className="h-16 w-auto" /> {/* Adjust the size as needed */}
              <div className="text-2xl font-semibold text-center ml-3">NatureTrade</div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-lg font-Poppins mb-1" htmlFor="advertisementNo">Advertisement No</label>
                <input
                  id="advertisementNo"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-600"
                  placeholder="Enter Advertisement No"
                />
              </div>
              <div>
                <label className="block text-lg font-Poppins mb-1" htmlFor="supplierName">Supplier Name</label>
                <input
                  id="supplierName"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-600"
                  placeholder="Enter Supplier Name"
                />
              </div>
              <div>
                <label className="block text-lg font-Poppins mb-1" htmlFor="productName">Product Name</label>
                <input
                  id="productName"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-600"
                  placeholder="Enter Product Name"
                />
              </div>
              <div>
                <label className="block text-lg font-Poppins mb-1" htmlFor="category">Category</label>
                <input
                  id="category"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-600"
                  placeholder="Enter Category"
                />
              </div>
              <div>
                <label className="block text-lg font-Poppins mb-1" htmlFor="quantity">Quantity</label>
                <input
                  id="quantity"
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-600"
                  placeholder="Enter Quantity"
                />
              </div>
              <div>
                <label className="block text-lg font-Poppins mb-1" htmlFor="collectingCenter">Collecting Center(Preferred)</label>
                <input
                  id="collectingCenter"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-600"
                  placeholder="Enter Collecting Center"
                />
              </div>
              <div>
                <label className="block text-lg font-Poppins mb-1" htmlFor="date">Date</label>
                <input
                  id="date"
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-gray-900 font-semibold p-2 rounded-md mt-4 hover:bg-primary-dark"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Requestform;
