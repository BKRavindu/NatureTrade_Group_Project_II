import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import Logo from "../../../assets/Logo.png";
import fImg5 from "../../../assets/fImg5.png";



const footerLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${fImg5})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};



const Footer = () => {
  return (
    <div className=" text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
        <div className=" ">
        <a href="#" className="font-bold text-2x2 
        sm:text-3xl flex justify-start text-black
        items-center gap-4 tracking-wider
        font-Poppins">
        <img src={Logo} alt="Logo"
        className="w-12"/>
        NatureTrade
        </a>
        </div>
            <p className="pt-4 sm:text-left mb-3 text-black text-xl">
              Best quality of spices and herbs in Sri Lanka
            </p>
            <a
              href="#contact"
              target="_blank"
              className="inline-block bg-primary py-2 px-4 mt-5 text-black border-2 border-black text-xl rounded-full"
            >
              Contact Us
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold mb-3 text-black">
                Important Links
              </h1>
              <ul className="space-y-3 text-lg">
                {footerLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200 text-black"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3 text-black">
                Quick Links
              </h1>
              <ul className="space-y-3 text-lg">
                {footerLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200 text-black"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3 text-black">
                Address
              </h1>
              <div>
                <p className="mb-3 text-black text-lg">No.93, Wijerama road, Colombo 7</p>
                <p className="text-black text-lg">+94 11 996 7788</p>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6 text-black">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaWhatsapp className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaTwitter className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
