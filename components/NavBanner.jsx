import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const NavBanner = () => {
  return (
    <div className=" w-full text-white bg-gradient-to-l from-orange-600 to-orange-400 py-2">
      <div className="flex justify-between">
        <div className="mx-10">
          <ul className="flex ">
            <li className="flex space-x-2">
              <BsFillTelephoneFill className="text-xl" />
              <span className="hidden md:block">+880 13012-53885</span>
            </li>
            <li className="flex  mx-4 space-x-2">
              <a
                href="mailto:tarekrahim100@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex space-x-2">
                <AiFillMail className="text-xl" />
                <span className="hidden md:block">tarekrahim100@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-5">
          <ul className="flex">
            <li className="ml-5 text-sm uppercase text-white ">
              <a
                href=""
                target="_blank"
                rel="noreferrer">
                <div className="text-xl  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
              </a>
            </li>
            <li className="ml-5 text-sm uppercase text-white">
              <a
                href="https://www.facebook.com/tarekrfahim"
                target="_blank"
                rel="noreferrer">
                <div className="text-xl  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaFacebook />
                </div>
              </a>
            </li>
            <li className="ml-5 text-sm uppercase text-white">
              <a href="https://github.com/tarekrfahim" target="_blank" rel="noreferrer">
                <div className="text-xl  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
              </a>
            </li>
            <li className="ml-5 text-sm uppercase text-white">
              <a
                href="mailto:tarekrfahim100@gmail.com"
                target="_blank"
                rel="noreferrer">
                <div className="text-xl  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <AiFillMail />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBanner;
