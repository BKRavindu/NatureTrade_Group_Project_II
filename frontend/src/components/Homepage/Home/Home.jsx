import React from "react";
import Hero from "../Herosection/Herosection";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import About from "../About/About";
import Actors from "../Actors/Actors";
import Awards from "../Awards/Awards";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <div className="" flex>
      <Navbar />
      <Hero/>
      <Products />
      <About />
      <Actors/>
      <Awards />
      <Footer />
    </div>
  )
}

export default Home;
