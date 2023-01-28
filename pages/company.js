import Image from "next/image";
import React from "react";
import Static from "../public/assets/1.jpg";

const Company = () => {
  return (
    <div id="company" className="">
      <section className="text-gray-600">
        <div className="px-8 py-12 grid lg:grid-cols-2 item-center">
          <div className="mt-auto mb-auto grid md:grid-cols-2 gap-12">
            <div class="w-full p-6 bg-white-800 text-center mb-4 py-16 rounded-lg shadow-xl border-2 border-gray-200 ">
              <h2 className="font-bold text-5xl text-orange-500">10,000+</h2>
              <p className="text-2xl font-medium text-center text-orange-500 uppercase">
                Design <br /> completed
              </p>
            </div>

            <div class="w-full p-6 bg-white-800 text-center py-16 mb-4 rounded-lg shadow-xl border-2 border-gray-200">
              <h2 className="font-bold text-5xl text-orange-500">
                50+
              </h2>
              <p className="text-2xl  text-orange-500 uppercase">
                Brand Services
              </p>
            </div>

            <div class="w-full p-6 bg-white-800 text-center py-16 mb-4 rounded-lg shadow-xl border-2 border-gray-200">
              <h2 className="font-bold text-5xl text-orange-500">100+</h2>
              <p className="text-2xl text-orange-500 uppercase">Happy Client</p>
            </div>
            <div class="w-full p-6 bg-white-800 text-center py-16 mb-4 rounded-lg shadow-xl border-2 border-gray-200">
              <h2 className="font-bold text-5xl text-orange-500">100%</h2>
              <p className="text-2xl text-orange-500 uppercase">Satisfaction</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden mb-4  sm:mt-0 order-first lg:order-last">
            <Image
              className="object-fill object-center"
              src={Static}
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
