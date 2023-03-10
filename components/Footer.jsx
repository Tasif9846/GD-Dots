import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "../public/assets/GD-Dots.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white shadow-lg border-t-2">
        <div className="container  gap-10 px-5 py-12 mx-auto grid md:grid-cols-3  md:items-center  ">
          <div className="mx-auto text-center md:text-left">
            <Link href={"/"}>
              <div className="flex font-medium items-center justify-center text-white cursor-pointer mb-5 md:justify-start">
                <Image src={Logo} alt=".." width={140} height={40} />
              </div>
            </Link>
            <p className="mt-2 px-4 text-sm text-gray-300 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              alias, placeat ut consectetur ducimus architecto tenetur suscipit
              exercitationem corporis excepturi.
            </p>
          </div>

          <div className="-mb-10 mt-10 justify-center items-center text-center md:mt-0 md:px-24 md:text-left">
            <div className="w-full px-4 ">
              <h2 className="font-bold text-white tracking-widest text-sm mb-5">
                Privacy & Terms
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
                    Payment Systems
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div className="-mb-10 mt-10 justify-center items-center text-center md:mt-0 md:px-24 md:text-left">
            <div className="w-full px-4 ">
              <h2 className="font-bold text-white tracking-widest text-sm mb-5">
                Quick Links
              </h2>
              <nav className="list-none mb-10">
                <Link href={"/contact"}>
                  <li>
                    <div className="text-gray-300 text-sm hover:text-gray-800 cursor-pointer">
                      Contact Us
                    </div>
                  </li>
                </Link>
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
                    Return Policy
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <hr className="text-white mx-20" />
        <div className="bg-black">
          <div className=" m-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center">
            <p className=" text-sm text-center tracking-widest space-x-36 sm:text-left">
              ?? Copyright 2023 || GD Dots || All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
