import React from 'react';

import SideBar from '../../components/supplier/SideBar';
import NavBar from '../../components/supplier/NavBar';
import truck from '../../assets/undraw_delivery_truck_vt6p (1).svg';
import item1 from '../../assets/item1.svg';
import item2 from '../../assets/item2.svg';
import item3 from '../../assets/item3.svg';
import item4 from '../../assets/item4.svg';
import cinnamon from '../../assets/cinnamon.jpeg';
import pepper from '../../assets/pepper.jpeg';
import clove from '../../assets/clove.jpeg';
import nutmeg from '../../assets/nutmeg.jpeg'
import  coriander from '../../assets/coriander.jpg';
import  cumin from '../../assets/cumin.jpg';
import  curryleaf from '../../assets/curryleaf.jpg';
import  fennel from '../../assets/fennel.jpg';
import  fenugreek from '../../assets/fenugreek.jpg';
import garlic from '../../assets/garlic.jpg';
import ginger from '../../assets/ginger.jpg';
import chilli from '../../assets/chilli.jpg';




function SupplierStore() {

    const tr = {
        padding: '0.5rem',
        backgroundColor: '#f9f9f9',
        transition: 'background-color 0.3s',
      };

  return (
    <>
        <NavBar />
        <div className="flex">
            <SideBar />
            <div className="flex p-2 flex-col flex-1  ">
                <div className="flex flex-col">
                    <div className="font-semibold text-2xl mb-2 -mt-12 mb-5">Stock</div>
                    <div className="flex flex-row gap-3">

                    <div className="font-normal text-gray-400 text-xl">Dashboard</div>{">"}
                    <div className="font-normal text-xl">Stock</div>
                    </div>
                </div>
                {/* <div className="flex justify-between items-center p-4 bg-white mt-4 rounded-lg border-gray-300 rounded-2xl shadow-lg">
                    <div className="flex flex-col gap-4 flex-col">
                        <div className="text-6xl font-normal">Hello, <span className='font-light text-2xl'>John!</span></div>
                        <div className="font-normal mt-5">You have <span className='text-red-500'>5</span> orders today.</div>
                    </div>
                    <img src={truck} alt="" className='w-[300px] h-[150px]'   />
                </div> */}
                <div className="flex gap-1 justify-between items-center mt-4 ">
                    
                <div className="w-30 h-30 flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-black border-2 rounded-2x1 shadow-lg">
                        <img src={cinnamon} alt="" className='w-50 h-20 mt-10 rounded-full p-3' />
                        <div className="text-xl font-semibold flex flex-col items-center">
                            Cinnamon
                        <span className="text-lg font-normal">Type:Alba</span>
                        <span className="text-lg font-normal">Quantity:10Kg</span>
                        </div>
                    </div>

                    <div className="w-30 h-30 flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-black border-2 rounded-2x1 shadow-lg">
                        <img src={pepper} alt="" className='w-50 h-20 mt-10 rounded-full p-3' />
                        <div className="text-xl font-semibold flex flex-col items-center">
                            Pepper
                            <span className="text-lg font-normal">Type:Black</span>
                        <span className="text-lg font-normal">Quantity:8Kg</span>
                        </div>
                    </div>

                    <div className="w-30 h-30 flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-black border-2 rounded-2x1 shadow-lg">
                        <img src={clove} alt="" className='w-50 h-20 mt-10 rounded-full p-3' />
                        <div className="text-xl font-semibold flex flex-col items-center">
                            Clove
                            <span className="text-lg font-normal">Type:Spicy</span>
                        <span className="text-lg font-normal">Quantity:12Kg</span>
                        </div>
                    </div>

                    <div className="w-30 h-30 flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-black border-2 rounded-2x1 shadow-lg">
                        <img src={nutmeg} alt="" className='w-50 h-20 mt-10 rounded-full p-3' />
                        <div className="text-xl font-semibold flex flex-col items-center">
                            Nutmeg
                            <span className="text-lg font-normal">Type:Kinattukara</span>
                        <span className="text-lg font-normal">Quantity:5Kg</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-1 justify-between items-center mt-4 ">
                    
                    <div className="w-30 h-30 flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-black border-2 rounded-2x1 shadow-lg">
                            <img src={coriander} alt="" className='w-50 h-20 mt-10 rounded-full p-3' />
                            <div className="text-xl font-semibold flex flex-col items-center">
                                Coriander
                                <span className="text-lg font-normal">Type:Ceylon</span>
                            <span className="text-lg font-normal">Quantity:10Kg</span>
                            </div>
                        </div>
    
                        <div className="w-30 h-30 flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-black border-2 rounded-2x1 shadow-lg">
                            <img src={cumin} alt="" className='w-50 h-20 mt-10 rounded-full p-3' />
                            <div className="text-xl font-semibold flex flex-col items-center">
                                Cumin
                                <span className="text-lg font-normal">Type:Ceylon</span>
                            <span className="text-lg font-normal">Quantity:20Kg</span>
                            </div>
                        </div>
    
                        <div className="w-30 h-30 flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-black border-2 rounded-2x1 shadow-lg">
                            <img src={curryleaf} alt="" className='w-50 h-20 mt-10 rounded-full p-3' />
                            <div className="text-xl font-semibold flex flex-col items-center">
                                Curryleaf
                                <span className="text-lg font-normal">Type:Ceylon</span>
                            <span className="text-lg font-normal">Quantity:5Kg</span>
                            </div>
                        </div>
    
                        <div className="w-30 h-30 flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-black border-2 rounded-2x1 shadow-lg">
                            <img src={fennel} alt="" className='w-50 h-20 mt-10 rounded-full p-3' />
                            <div className="text-xl font-semibold flex flex-col items-center">
                                Fennel
                                <span className="text-lg font-normal">Type:Ceylon</span>
                            <span className="text-lg font-normal">Quantity:3Kg</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-1 justify-between items-center mt-4 ">
                    
                    <div className="w-30 h-30 flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-black border-2 rounded-2x1 shadow-lg">
                            <img src={fenugreek} alt="" className='w-50 h-20 mt-10 rounded-full p-3' />
                            <div className="text-xl font-semibold flex flex-col items-center">
                                Fenugreek
                                <span className="text-lg font-normal">Type:Ceylon</span>
                            <span className="text-lg font-normal">Quantity:3Kg</span>
                            </div>
                        </div>
    
                        <div className="w-30 h-30 flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-black border-2 rounded-2x1 shadow-lg">
                            <img src={garlic} alt="" className='w-50 h-20 mt-10 rounded-full p-3' />
                            <div className="text-xl font-semibold flex flex-col items-center">
                                Garlic
                                <span className="text-lg font-normal">Type:Ceylon</span>
                            <span className="text-lg font-normal">Quantity:7Kg</span>
                            </div>
                        </div>
    
                        <div className="w-30 h-30 flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-black border-2 rounded-2x1 shadow-lg">
                            <img src={ginger} alt="" className='w-50 h-20 mt-10 rounded-full p-3' />
                            <div className="text-xl font-semibold flex flex-col items-center">
                                Ginger
                                <span className="text-lg font-normal">Type:Rangoon</span>
                            <span className="text-lg font-normal">Quantity:4Kg</span>
                            </div>
                        </div>
    
                        <div className="w-30 h-30 flex flex-col gap-3 justify-center items-center mt-4 px-10 pb-2 bg-white border-black border-2 rounded-2x1 shadow-lg">
                            <img src={chilli} alt="" className='w-50 h-20 mt-10 rounded-full p-3' />
                            <div className="text-xl font-semibold flex flex-col items-center">
                                Chilli
                                <span className="text-lg font-normal">Type:Red</span>
                            <span className="text-lg font-normal">Quantity:6Kg</span>
                            </div>
                        </div>
                    </div>
    
                
            </div>
        </div>
    </>
  )
}

export default SupplierStore