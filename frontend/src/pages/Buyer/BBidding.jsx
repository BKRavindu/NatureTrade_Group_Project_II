import React from 'react'
import Slider from 'react-slick';
import BuyerNavBar from '../../components/Buyer/BuyerNavBar'
import BuyerSideBar from '../../components/Buyer/BuyerSideBar'
import profile from '../../assets/images.jpeg';
import cinnamon from '../../assets/cinnamon.jpeg';
import clove from '../../assets/clove.jpeg';
import chilli from '../../assets/chilli.jpg';
import ginger from '../../assets/ginger.jpg';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';


     

const BiddingData = [
  {
    id: 1,
    current: 'LKR 20000',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: cinnamon,
    name: 'Cinnamon',
    type: 'Product Type',
    startingPrice: 'LKR 19000',
    startDate: '12/06/2024',
    EndDate: '12/07/2024'
  },
  {
    id: 1,
    current: 'LKR 20000',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: clove,
    name: 'Cinnamon',
    type: 'Product Type',
    startingPrice: 'LKR 19000',
    startDate: '12/06/2024',
    EndDate: '12/07/2024'
  },
  {
    id: 1,
    current: 'LKR 20000',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: ginger,
    name: 'Cinnamon',
    type: 'Product Type',
    startingPrice: 'LKR 19000',
    startDate: '12/06/2024',
    EndDate: '12/07/2024'
  },
  {
    id: 1,
    current: 'LKR 20000',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: chilli,
    name: 'Cinnamon',
    type: 'Product Type',
    startingPrice: 'LKR 19000',
    startDate: '12/06/2024',
    EndDate: '12/07/2024'
  },
];

function BBidding() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 750,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
    return (
      <>
       <BuyerNavBar />
      <div className="flex">
        <BuyerSideBar/>
        <div className="flex flex-col flex-1 mr-3">
          <div className="flex flex-col">
            <div className="font-semibold text-xl mb-2 -mt-12 mb-5">Bidding</div>
            <div className="flex flex-row gap-3">
              <div className="font-normal text-gray-400 text-md">Bidding</div>
              {">"}
              <div className="font-normal text-md">Home</div>
            </div>
          </div>
          <div className="flex flex-col gap-3-p-4 rounded-lg bg-white shadow-md mt-4 p-10 gap-5 mr-4 justify-center items-center">
          
            <div className="flex text-3xl font-semibold">Tenders</div>
            <Link to="/Buyer/BTender">
            <div className="flex justify-center items-center border rounded-lg p-2 pr-4 pl-4 cursor-pointer bg-[#D3E7F0] text-[#034F75] hover:bg-[#034F75] hover:text-white "><i className='bx bx-edit pr-3' ></i>Call for a Tender</div>
            </Link>
          </div>
          <div className="flex flex-col gap-3-p-4 rounded-lg bg-white shadow-md mt-4 p-10 gap-5 mr-4 justify-center items-center">
            <div className="flex items-start w-full">
              <div className="flex justify-center items-center gap-6 border rounded-lg p-2">
                Ongoing <BsChevronDown className="" />
              </div>
            </div>
            <div className="max-w-screen-1100px">
              <div className=" ">
                <div data-aos="zoom-in">
                  <Slider {...settings}>
                    {BiddingData.map((data) => (
                      <div className="my-6" key={data.id}>
                        <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-[#F8F9FD] relative">
                          <div className="flex justify-center items center text-2xl">Current Price</div>
                          <div className="flex justify-center items center text-2xl font-semibold">{data.current}</div>
                          <div className="mb-4">
                            <img
                              src={data.img}
                              alt=""
                              className="border w-30 h-30"
                            />
                          </div>
                          {/* content section */}
                          <div className="flex flex-col items-center gap-4">
                            <div className="space-y-3 ">
                            <h1 className="text-2xl font-bold text-black/80 font-cursive2 text-center ">
                                {data.name}
                              </h1>
                              <p className=" text-lg text-gray-500">{data.text}<span className='text-blue-500'> see more...</span></p>  
                            </div>
                            <div className="">
                                <ul className=''>
                                    <li className='mb-2'>Product type : {data.type}</li>
                                    <li className='mb-2'>Stating Price : {data.startingPrice}</li>
                                    <li className='mb-2'>Start Date : {data.startDate}</li>
                                    <li className='mb-2'>End Date : {data.EndDate}</li>
                                </ul>
                            </div>
                            <Link to="/Buyer/BTender">
                            <div className="flex justify-center items-center border rounded-lg p-2 pr-4 pl-4 cursor-pointer bg-[#D3E7F0] text-[#034F75] hover:bg-[#034F75] hover:text-white ">
                            <i className='bx bx-edit pr-3' ></i>Edit Tender</div>
                            </Link>
                          </div>
                         
                          {/* <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                            ,,
                          </p> */}
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   

    
    </>
  )
}

export default BBidding;
