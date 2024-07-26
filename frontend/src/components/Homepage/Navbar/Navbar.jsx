import React from 'react';
import Logo from "../../../assets/Logo.png";
import { Link } from 'react-router-dom';

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Products",
    link: "/#products",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Contact",
    link: "/#contact",
  },
  {
    id: 5,
    name: "Awards",
    link: "/#awards",
  },
];

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-secondary to-secondary/90 text-black'>
      <div className="container py-2">
        <div className="flex">
          {/* Logo */}
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-5 font-Poppins">
              <img src={Logo} alt="Logo" className="w-15 h-14 text-xl" />
              NatureTrade
            </a>
          </div>

          {/* Lower Navbar */}
          <div data-aos="zoom-in" className="flex justify-center">
            <ul className="px-10 sm:flex sm:right-10 hidden items-center gap-6">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block text-2xl px-8 py-4 text-black hover:text-black duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <Link to="/login">
              <button className="bg-primary px-4 py-2 rounded-3xl text-black text-xl border-2 border-black hover:scale-105 duration-200">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
