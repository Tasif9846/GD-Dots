import Image from "next/image";
import React from "react";
import Img from "../public/assets/33.png";
import Img2 from "../public/assets/2.png";
import Img3 from "../public/assets/3.png";
import Img4 from "../public/assets/4.png";
import Img5 from "../public/assets/5.png";
import Img6 from "../public/assets/6.png";

const Services = () => {
  return (
    <div id="services" className="bg-pink-50">
      <section className="text-gray-600">
        <div className="px-8 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-5 flex-col items-center text-center">
            <h1 className="text-4xl  font-bolder mb-2 text-gray-900 uppercase tracking-wider">
              Our <span className="text-orange-600">Services</span>
            </h1>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16  justify-center text-center items-center mx-auto">
            <div class="w-full p-6 text-center  mb-4 rounded-lg shadow-xl bg-white border border-gray-200">
              <Image src={Img} className="object-fill object-center" alt=".." />
              <h2 className="text-4xl text-gray-900 font-medium mb-2">
                Graphics <br /> Design
              </h2>
            </div>
                <div class="w-full p-6 text-center  mb-4 rounded-lg shadow-xl bg-white border border-gray-200">
              <Image src={Img2} className="object-fill object-center" alt=".." />
              <h2 className="text-4xl text-gray-900 font-medium mb-2">
              Motion <br /> Graphics
              </h2>
            </div>
               
               <div class="w-full p-6 text-center  mb-4 rounded-lg shadow-xl bg-white border border-gray-200">
              <Image src={Img3} className="object-fill object-center" alt=".." />
              <h2 className="text-4xl text-gray-900 font-medium mb-2">
              3D <br /> Animation
              </h2>
            </div>
          
               <div class="w-full p-6 text-center  mb-4 rounded-lg shadow-xl bg-white border border-gray-200">
              <Image src={Img4} className="object-fill object-center" alt=".." />
              <h2 className="text-4xl text-gray-900 font-medium mb-2">
              UI/UX <br /> Design
              </h2>
            </div>
            
              <div class="w-full p-6 text-center  mb-4 rounded-lg shadow-xl bg-white border border-gray-200">
              <Image src={Img5} className="object-fill object-center" alt=".." />
              <h2 className="text-4xl text-gray-900 font-medium mb-2">
              Clipping
                  <br /> Path
              </h2>
            </div>
           
            <div class="w-full p-6 text-center  mb-4 rounded-lg shadow-xl bg-white border border-gray-200">
              <Image src={Img6} className="object-fill object-center" alt=".." />
              <h2 className="text-4xl text-gray-900 font-medium mb-2">
              Video <br /> Editing
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
