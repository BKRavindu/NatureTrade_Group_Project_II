import React from 'react'
import Slider from "react-slick";
import award1 from "../../../assets/award1.png";
import certification1 from "../../../assets/certification1.png";
import certification2 from "../../../assets/certification2.png";


const AwardsData=[

  {
    id: 1,
    name: "SEDB Award",
    text: `"The Presidential Export Awards (PEA) stands as the pinnacle of recognition bestowed by Hon. President of Sri Lanka upon exporters who have made exceptional contributions to the country's export sector and economic advancement."`,
    img: award1,
  },
  {
    id: 2,
    name: "SLSI Organic Certification",
    text: `"SLSI is the National Standards Body in Sri Lanka and a member of the International Organisation for Standardisation (ISO). An SLSI Certification signifies that a product is manufactured in compliance with Sri Lanka Standard Specifications, and can be purchased with an assurance of quality."`,
    img: certification1,
  },
  {
    id: 3,
    name: "Fair Trade Certification",
    text: `"Fairtrade Certified it means that they were produced in accordance with Fairtrade International's rigorous environmental, economic and social standards. This is independently verified through regular audits by an accredited third-party auditor, FLOCERT"`,
    img: certification2,
  },

];


const Awards = () => {

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
            Awards & Certifications
          </h1>
          </a>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {AwardsData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-30 h-30 "
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-lg text-gray-500">{data.text}</p>
                      <h1 className="text-2xl font-bold text-black/80  font-cursive2">
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

export default Awards;
