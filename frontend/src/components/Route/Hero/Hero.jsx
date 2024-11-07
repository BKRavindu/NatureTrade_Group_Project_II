import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import heroBg from "../../../Assests/hero-bg.jpg"; // Adjust the path according to your directory structure

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`} style={{ textAlign: 'left', marginLeft: '100px' }}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-black-bold font-[600] capitalize`}
          style={{ margin: '0' }}
        >
          Sri Lanka no. 1 <br /> Spices market
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-black" style={{ paddingRight: '20px' }}>
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium t{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products" className="inline-block" style={{ paddingRight: '20px' }}>
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
