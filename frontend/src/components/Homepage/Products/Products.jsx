import React from 'react'
import cinnamon from "../../../assets/cinnamon.jpeg";
import clove from "../../../assets/clove.jpeg";
import pepper from "../../../assets/pepper.jpeg";
import cardamom_oil from "../../../assets/cardamom_oil.jpeg";
import nutmeg from "../../../assets/nutmeg.jpeg";
import ginger from "../../../assets/ginger.jpeg";



const ProductsData = [
  {
    id: 1,
    img: cinnamon,
    name: "Cinnamon",
    description:
      `"Best cinnamon with Alba,Continental,Mexican and Hamburg varieties
      Ceylon cinnamon has a strong demand in the international market due to its health benefits, delicate flavor, and lower coumarin content compared to Cassia cinnamon, which makes it safer for regular consumption"`,   
    aosDelay: "100",
  },
  {
    id: 2,
    img: clove,
    name: "Clove",
    description:
      `"Sri Lankan cloves, known for their superior quality, are mainly classified based on size, color, and aroma. 
      They are harvested from the clove tree, Syzygium aromaticum. The two primary types are Hand-picked and Machine-sorted"`,
     
    aosDelay: "300",
  },
  {
    id: 3,
    img: pepper,
    name: "Pepper",
    description:
      `"Sri Lankan pepper, known for its robust flavor and high piperine content, is classified primarily into two types
      Black pepper and White pepper The global demand for Sri Lankan pepper is driven by its reputation for quality, 
      the rising interest in organic and natural spices, and the growing food industry. "`,
    aosDelay: "300",
  },




];



const Products = () => {
  return (
    <div>
     <div className="container">
      {/*Products Header title*/}
      <div className="text-center mb-20">
        <a href="#products"><h1 className="text-4xl font-bold font-Poppins text-gray-800">
        Our top products
          </h1>
          </a>
        </div>

        {/*Products Card section*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ProductsData.map((product) => (
              <div
                data-aos="fade-up"
                data-aos-delay={product.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-black border-black border-3 relative shadow-xl duration-high group max-w-[400px] p-7"
              >
                <div className="h-[150px] border-3 border-black">
                  <img
                    src={product.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14 border-black border-2
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="px-1 pb-12 text-center">
                  <h1 className="text-xl font-bold mt-2">{product.name}</h1>
                    <p className="text-gray-500 group-hover:text-black duration-high text-xl line-clamp-6">
                      {product.description}
                    </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Products;
