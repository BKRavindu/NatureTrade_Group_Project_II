import React from "react";
import aboutImg from "../../../assets/aboutImg.jpg";


const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={aboutImg}
              alt=""
              className="max-w-[500px] h-[350px] w-full mx-auto object-cover border-black border-2"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Start your spices & herbs trading with us
            </h1>
            <p
              data-aos="fade-up"
              className="text-lg text-gray-500 tracking-wide leading-10 text-xl"
            >
              Sri Lanka exports a range of essential oils including Ceylon Cinnamon Oil, Pepper Oil, Cardamom Oil, Ceylon Citronella Oil, Clove Oil and Nutmeg Oil for export markets in the USA, India, Singapore, Germany, the USA and France, earning an average revenue on USD 66 Million.
              Our target is to contribute to this revenue up to USD 80 million average per year.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

