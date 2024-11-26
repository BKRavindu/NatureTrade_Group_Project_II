import React from 'react'
import Slider from "react-slick";
import sup from "../../../assets/sup.png";
import collect from "../../../assets/collect.png";
import deliver1 from "../../../assets/deliver1.jpeg";
import buy from "../../../assets/buy.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ActorsData=[

  {
    id: 1,
    name: "Supplier",
    text: `"Supply 
    the Spices and Herbs with fresh and best quality products from islandwide regions"`,
    img:sup,
  },
  {
    id: 2,
    name: "Collector",
    text: `"Collecting the supplied spices and herbs and make the quality checking again
    to keep the product's best quality"`,
    img: collect,
  },
  {
    id: 3,
    name: "Buyer",
    text: `"Islandwide local buyers and Sri lanka's leading
    spice exporting companies joined as our customer to get their products"`,
    img: buy,
  },
  {
    id: 4,
    name: "Delivery company",
    text: `"Place your order with our delivery company providing unique and traditional spice blends
     with on time and ensures the best quality"`,
    img: deliver1,
  },
 

];


const Actors = () => {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 750,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
   <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <a href="#awards"><h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Our Members
          </h1>
          </a>
        </div>

        {/* Member cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {ActorsData.map((data) => (
              <div className="my-7">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                >
                  <div className="mb-5">
                    <img 
                      src={data.img}
                      alt=""
                      className="rounded w-30 h-30"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-lg text-gray-500">{data.text}</p>
                      <h1 className="text-2xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
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
  );
};

export default Actors;
