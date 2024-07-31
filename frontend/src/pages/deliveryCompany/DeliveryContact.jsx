import React from 'react'
import SideBar from '../../components/deliveryCompany/SideBar'
import NavBar from '../../components/deliveryCompany/NavBar'
import profile from '../../assets/images.jpeg';


const DeliveryContact = () => {
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
                  <div className="font-normal text-md">John Nicholas</div>
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
                    Hi there, can i ask about your delivery company details?
                  </div>
                  <div className="flex self-end text-gray-400 text-xs w-[70px] whitespace-nowrap overflow-hidden text-ellipsis">
                    11:35AM
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex felx-col gap-1 py-1 bg-blue-500 rounded-lg max-w-[300px]">
                  <div className=" p-3  max-w-[300px] text-white">
                    Sure, what do you need to know?
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
                    I just wanna make sure will my order send to new address?
                  </div>
                  <div className="flex self-end text-gray-400 text-xs pr-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    11:35AM
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex felx-col gap-1 py-1 bg-blue-500 rounded-lg max-w-[300px]">
                  <div className=" p-3  max-w-[300px] text-white">
                    Sure, what is your new address?
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
                  <div className=" p-3  max-w-[300px]">No 13/40 Lake view road, California</div>
                  <div className="flex self-end text-gray-400 text-xs pr-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    11:35AM
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex felx-col gap-1 py-1 bg-blue-500 rounded-lg max-w-[300px]">
                  <div className=" p-3  max-w-[300px] text-white">
                  Ok, Thank you for providing your new address. I will make sure your order 
                   will be to your new address.
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
                    Okay, Thank you.
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

export default DeliveryContact;

