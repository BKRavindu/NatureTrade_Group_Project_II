import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNGZEBT4HzKFCi01yJx8SB0tL0fyv3PnNOw&s"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://st4.depositphotos.com/23677954/25611/v/450/depositphotos_256115714-stock-illustration-chili-logo-template-vector-icon.jpg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsN4Abr1O8zI65USRNI_QPr958iHbPqB_GQaYDIxgDrRgMrx_6Gjx_hggJ0sz-V3ddRQ&usqp=CAU"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://img.freepik.com/free-vector/hand-draw-spicy-logo-design_23-2149613477.jpg?semt=ais_hybrid"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://img.freepik.com/premium-vector/organic-spices-logo-concept-design-food-vector-illustration-healthy-simple-logotype_581980-150.jpg?semt=ais_hybrid"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
