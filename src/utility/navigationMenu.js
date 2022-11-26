import { AiOutlineCalendar, AiOutlineDollar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { GrConfigure } from "react-icons/gr";
import { MdOutlineColorLens } from "react-icons/md";

// const navigationMenu = [
//   {
//     icon: "icons",
//     name: "Basic information",
//     activeIcon: "active",
//     subMenu: [],
//   },
// ];

export const navigationMenu = [
  { name: "Basic information", icon: <AiOutlineCalendar /> },
  { name: "Car cost", icon: <AiOutlineDollar /> },
  { name: "Search region", icon: <HiOutlineLocationMarker /> },
  { name: "vehicle condition", icon: <GrConfigure /> },
  { name: "add. characteristics", icon: <FiSettings /> },
  { name: "Color", icon: <MdOutlineColorLens /> },
];
