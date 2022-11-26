import React, { useState } from "react";
import { AiOutlineCloseSquare, AiOutlinePlus } from "react-icons/ai";
import Logo from "../../assets/image/settings.png";
import { navigationMenu } from "../../utility/navigationMenu";
import FoundCars from "../FoundCars/FoundCars";
import SloMenu from "../SloMenu/SloMenu";

const NavigationBar = ({ show, setShow }) => {
  return (
    <div className="">
      <div className="">
        <div className="border-b-2 border-[#E6E6E6] px-5 py-3 flex justify-between">
          <a
            href="/"
            className="flex blok items-center  gap-2 uppercase font-extrabold logo text-softBlack tracking-wide "
          >
            <img width={30} src={Logo} alt="logo" />
            Auto World
          </a>
          <button
            onClick={() => setShow(false)}
            className="text-[1.7rem]  bg-secondary rounded-full p-2 text-primary lg:hidden blok"
          >
            <AiOutlineCloseSquare className=" " />
          </button>
        </div>
        <ul className=" py-2">
          {navigationMenu.map((m) => (
            <SloMenu menu={m} />
          ))}
        </ul>
        <FoundCars />
      </div>
    </div>
  );
};

export default NavigationBar;
