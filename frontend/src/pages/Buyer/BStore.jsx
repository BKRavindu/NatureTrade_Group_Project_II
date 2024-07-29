import React from 'react';
import BuyerNavBar from '../../components/Buyer/BuyerNavBar'
import BuyerSideBar from '../../components/Buyer/BuyerSideBar'
import cinnamon from '../../assets/cinnamon.jpeg';
import Cardamon from '../../assets/Cardamon.jpg';
import clove from '../../assets/clove.jpeg';
import ginger from '../../assets/ginger.jpg';
import Nutmeg1 from '../../assets/Nutmeg1.jpg';
import pepper1 from '../../assets/pepper1.jpg';







function BStore() {

    const tr = {
        padding: '0.5rem',
        backgroundColor: '#f9f9f9',
        transition: 'background-color 0.3s',
      };

  return (
    <>
         <BuyerNavBar />
        <div className="flex">
        <BuyerSideBar />
            <div className="flex p-2 flex-col flex-1  ">
                <div className="flex flex-col">
                    <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Dashboard</div>
                    <div className="flex flex-row gap-3">

                    <div className="font-normal text-gray-400 text-md">Dashboard</div>{">"}
                    <div className="font-normal text-md">Store</div>
                    </div>
                </div>
               
                <div className="flex gap-2 justify-between items-center mt-4 ">
                    
                <div className="w-72 h-72 flex flex-col gap-2 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300  rounded-lg shadow-lg  ">
                        <img src={cinnamon} alt="" className='w-50 h-20 mt-10 ' />
                        <div className="text-xl font-semibold flex flex-col items-center">
                            Cinnamon
                        <span className="text-sm font-normal">Center 1</span>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Order
                         </button>
                    </div>


                    <div className="w-72 h-72 flex flex-col gap-2 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-lg  shadow-lg">
                        <img src={pepper1} alt="" className='w-50 h-20 mt-10 ' />
                        <div className="text-xl font-semibold flex flex-col items-center">
                        Pepper
                        <span className="text-sm font-normal">Center 4</span>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Order
                         </button>
                    </div>

                    <div className="w-72 h-72 flex flex-col gap-2 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-lg shadow-lg">
                        <img src={Cardamon} alt="" className='w-50 h-20 mt-10 ' />
                        <div className="text-xl font-semibold flex flex-col items-center">
                        Cardamom
                        <span className="text-sm font-normal">Center 1</span>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Order
                         </button>
                    </div>
                    </div>

                    <div className="flex gap-2 justify-between items-center mt-4 ">

                    <div className="w-72 h-72 flex flex-col gap-2 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-lg shadow-lg">
                        <img src={ginger} alt="" className='w-50 h-20 mt-10 ' />
                        <div className="text-xl font-semibold flex flex-col items-center">
                        Ginger
                        <span className="text-sm font-normal">Center 3,Center 2</span>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Order
                         </button>
                    </div>

                    <div className="w-72 h-72 flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-lg shadow-lg">
                        <img src={clove} alt="" className='w-50 h-20 mt-10 ' />
                        <div className="text-xl font-semibold flex flex-col items-center">
                        Clove
                        <span className="text-sm font-normal">Center 3</span>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Order
                         </button>
                    </div>

                    <div className="w-72 h-72 flex flex-col gap-2 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-lg shadow-lg">
                        <img src={Nutmeg1} alt="" className='w-50 h-20 mt-10 ' />
                        <div className="text-xl font-semibold flex flex-col items-center">
                        Nutmeg
                        <span className="text-sm font-normal">Center 1</span>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Order
                         </button>
                    </div>

                </div>

                <div className="flex gap-2 justify-between items-center mt-4 ">

                <div className="w-72 h-72 flex flex-col gap-2 justify-center items-center mt-4 px-10 pb-2 bg-white border-gray-300 rounded-lg shadow-lg">
                    <img src={cinnamon} alt="" className='w-50 h-20 mt-10 ' />
                    <div className="text-xl font-semibold flex flex-col items-center">
                    Other
                    <span className="text-sm font-normal">Center 2, Center 3</span>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                               Order
                     </button>
                </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default BStore