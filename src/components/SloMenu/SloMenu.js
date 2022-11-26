import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import SubDropDown from "../SubDropDown/SubDropDown";
import { motion } from "framer-motion";

const SloMenu = ({ menu }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleShowHideDropDown = () => {
    setShowSubMenu((current) => !current);
  };

  return (
    <div>
      <li
        onClick={handleShowHideDropDown}
        onBlur={() => setShowSubMenu(false)}
        className="relative border-b-[1px] border-[#E6E6E6]  px-5 py-6 cursor-pointer"
      >
        <div className=" flex items-center justify-between gap-2   ">
          <h4 className=" flex items-center gap-2 text-softBlack">
            <span className="text-[1.1rem] text-softBlack">{menu.icon}</span>
            {menu.name}
          </h4>
          <span className="text-[.9rem] text-softBlack">
            {showSubMenu ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </span>
        </div>
      </li>
      {showSubMenu ? <SubDropDown /> : null}
    </div>
  );
};

export default SloMenu;
