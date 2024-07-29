import React from 'react'
import SideBar from '../../components/supplier/SideBar'
import NavBar from '../../components/supplier/NavBar'
import profile from '../../assets/images.jpeg';


const SupplierContact = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="flex flex-col flex-1 mx-[200px]">
          <div className="flex flex-col">
            <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Contact</div>
            <div className="flex flex-row gap-3">
              <div className="font-normal text-gray-400 text-md">Dashboard</div>
              {">"}
              <div className="font-normal text-gray-400 text-md">Contact</div>
              {">"}

              <div className="font-normal text-md">Chat</div>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-xl p-3 mx-[200px] my-5">
            <div className="flex justify-between p-3 border-b border-gray-200">
              <i className="bx bx-chat self-center text-gray-600"></i>
              <div className="flex gap-3">
                <img
                  src={profile}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover mr-2"
                />
                <div className="flex flex-col gap-1 items-center">
                  <div className="font-normal text-md">John Doe</div>
                  <div className="font-normal text-gray-400 text-xs">
                    last seen 45 minutes ago{" "}
                  </div>
                </div>
              </div>
              <i className="bx bx-dots-horizontal-rounded self-center"></i>
            </div>
            <div className="flex flex-col gap-3 p-3">
              <div className="flex justify-start">
                <img
                  src={profile}
                  alt=""
                  className="w-6 h-6 rounded-full object-cover mr-2 self-center"
                />
                <div className="flex felx-col gap-1 py-1 bg-gray-200 rounded-lg max-w-[300px]">
                  <div className=" p-3  max-w-[300px]">
                    Hi there, can i ask about how i should supply my products?
                  </div>
                  <div className="flex self-end text-gray-400 text-xs w-[70px] whitespace-nowrap overflow-hidden text-ellipsis">
                    11:35AM
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex felx-col gap-1 py-1 bg-blue-500 rounded-lg max-w-[300px]">
                  <div className=" p-3  max-w-[300px] text-white">
                    Sure, could you provide your name?
                  </div>
                  <div className="flex self-end text-gray-400 text-white text-xs w-[70px] whitespace-nowrap overflow-hidden text-ellipsis">
                    11:35AM
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <img
                  src={profile}
                  alt=""
                  className="w-6 h-6 rounded-full object-cover mr-2 self-center"
                />
                <div className="flex felx-col gap-1 py-1 bg-gray-200 rounded-lg max-w-[300px]">
                  <div className=" p-3  max-w-[300px]">
                    {" "}
                    I'm Mike, I'm a supplier from kandy region
                  </div>
                  <div className="flex self-end text-gray-400 text-xs pr-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    11:35AM
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex felx-col gap-1 py-1 bg-blue-500 rounded-lg max-w-[300px]">
                  <div className=" p-3  max-w-[300px] text-white">
                    Sure, what do you need to know?
                  </div>
                  <div className="flex self-end text-gray-400 text-white text-xs pr-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    11:35AM
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <img
                  src={profile}
                  alt=""
                  className="w-6 h-6 rounded-full object-cover mr-2 self-center"
                />
                <div className="flex felx-col gap-1 py-1 bg-gray-200 rounded-lg max-w-[300px]">
                  <div className=" p-3  max-w-[300px]">Actually i need to know how my products are going to supply to the collecting centers?</div>
                  <div className="flex self-end text-gray-400 text-xs pr-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    11:35AM
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex felx-col gap-1 py-1 bg-blue-500 rounded-lg max-w-[300px]">
                  <div className=" p-3  max-w-[300px] text-white">
                  You should supply them by yourself to the centers. You can find the nearest 
                    collecting center to you.
                  </div>
                  <div className="flex self-end text-gray-400 text-white text-xs pr-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    11:35AM
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <img
                  src={profile}
                  alt=""
                  className="w-6 h-6 rounded-full object-cover mr-2 self-center"
                />
                <div className="flex felx-col gap-1 py-1 bg-gray-200 rounded-lg max-w-[300px]">
                  <div className=" p-3  max-w-[300px]">
                    Okay, Thank you for the information.
                  </div>
                  <div className="flex self-end text-gray-400 text-xs pr-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    11:35AM
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex felx-col gap-1 py-1 bg-blue-500 rounded-lg max-w-[300px]">
                  <div className=" p-3  max-w-[300px] text-white">
                    You're welcome! Is there anything else you need to know?
                  </div>
                  <div className="flex self-end text-gray-400 text-white text-xs pr-3 whitespace-nowrap overflow-hidden text-ellipsis">
                    11:35AM
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <img
                  src={profile}
                  alt=""
                  className="w-6 h-6 rounded-full object-cover mr-2 self-center"
                />
                <div className="flex felx-col gap-1 py-1 bg-gray-200 rounded-lg max-w-[300px]">
                  <div className=" p-3  max-w-[300px]">
                    No, that's all. Thanks!
                  </div>
                  <div className="flex self-end text-gray-400 text-xs pr-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    11:35AM
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex felx-col gap-1 py-1 bg-blue-500 rounded-lg max-w-[300px]">
                  <div className=" p-3  max-w-[300px] text-white">
                    Have a great day!
                  </div>
                  <div className="flex self-end text-gray-400 text-white text-xs pr-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    11:35AM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex px-5 py-1 justify-between mx-[200px] rounded-xl sticky bg-white mb-5 px-[200px] items-center">
            <i className="bx bx-file-blank"></i>
            <input
              type="text"
              placeholder="Message..."
              className="w-full mx-3"
            />
            <i className="bx bx-send"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupplierContact;

