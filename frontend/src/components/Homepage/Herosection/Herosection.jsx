import React from 'react'
import Hero from "../../../assets/Hero.png";
import { Link } from 'react-router-dom';


const Herosection = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                Get the best {" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive"
                >
                  Spices and Herbs
                </span>{" "}
                from Sri Lanka
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
              <button className="bg-primary border-primary hover:scale-105 duration-200 text-black border-4 border-black text-xl py-2 px-4 rounded-full">
                  <Link to="/sign-up">
                    Register Now!
                  </Link>
              </button>
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
            >
              <img
                data-aos-once="true"
                src={Hero}
                alt="Hero img"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
