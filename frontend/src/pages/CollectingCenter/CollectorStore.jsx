import React from 'react'
import profile from '../../assets/images.jpeg';
import SideBar from '../../components/CollectingCenter/CollectorSideBar'
import NavBar from '../../components/CollectingCenter/CollectorNavBar'

function CollectorStore() {

    const tr = {
        padding: '0.5rem',
        backgroundColor: '#f9f9f9',
        transition: 'background-color 0.3s',
      };

    return(
        <>
        <NavBar/>
        <div className='flex'>
            <SideBar/>
            <div className='flex p-2 flex-col flex-1'>
                <div className="flex flex-col">
                    <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Store</div>
                    <div className="flex flex-row gap-3">

                    <div className="font-normal text-gray-400 text-md">Store</div>{">"}
                    <div className="font-normal text-md">Home</div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white mt-4 rounded-lg border-gray-300 rounded-2xl shadow-lg">
                    <div className="flex flex-col gap-4 flex-col">
                        <div className='flex '>
                        <img src={profile} alt="Profile" className='w-20 h-20 rounded-full object-cover' />
                        <div className="text-2xl font-normal">Hello, <span className='font-light text-2xl'>CNMO2!</span></div>
                        <div className="font-normal mt-5"><span className='text-red-500'>5</span>  branches around Sri Lanka.</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default CollectorStore