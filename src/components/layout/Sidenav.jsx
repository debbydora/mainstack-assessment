import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdOutlinePeopleAlt,
  MdDeleteOutline,
  MdOutlineModeEditOutline,
  MdOutlineSubscriptions,
  MdFilePresent,
  MdAccessAlarms,
  MdOutlineDashboard,
} from "react-icons/md";
import { AiOutlineHourglass } from "react-icons/ai";
import { TbCameraPlus } from "react-icons/tb";

import Harmburger from "../Harmburger";
import Logo from "../.././assets/icons/mainstack-logo.svg";
import avatar from "../.././assets/icons/mainAvatar.svg";

const SideNav = () => {
  const [open] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const Menu1 = [
    { title: "Dashboard", path: "/", src: <MdOutlineDashboard /> },
    { title: "item 1", path: "/item1", src: <MdOutlineModeEditOutline /> },
    { title: "item 2", path: "/item2", src: <MdOutlinePeopleAlt /> },
    { title: "item 3", path: "/item3", src: <AiOutlineHourglass /> },
  ];
  const Menu2 = [
    { title: "item 4", path: "/item4", src: <TbCameraPlus /> },
    { title: "item 5", path: "/item5", src: <MdDeleteOutline /> },
  ];
  const Menu3 = [
    { title: "item 6", path: "/item6", src: <MdOutlineSubscriptions /> },
    { title: "item 7", path: "/item7", src: <MdFilePresent /> },
    { title: "item 8", path: "/item8", src: <MdAccessAlarms /> },
  ];

  return (
    <>
      <div
        className={` ${
          open ? "w-[350px]" : "w-fit"
        } hidden sm:block relative w-[304px] h-[900px] duration-300 pl-14 pr-4 py-8 border-r border-bordergray`}
      >
        <div className="">
          <img src={Logo} alt="logo" className="-ml-1" />
        </div>

        <ul className="gap-5 flex flex-col mt-10">
          {Menu1.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-3 text-base font-normal rounded-lg cursor-pointer hover:bg-gray-200 
                        ${location.pathname === menu.path && " text-orange"}`}
              >
                <span
                  className={`w-5 h-5 text-xl  ${
                    location.pathname === menu.path
                      ? "text-orange"
                      : "text-icongray"
                  }`}
                >
                  {menu.src}
                </span>
                <span
                  className={`font-semibold text-base  ${
                    location.pathname === menu.path
                      ? " text-orange"
                      : "text-navColor"
                  } ${!open && "hidden"} origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
          <p className="mt-3 text-xs text-navColor font-medium">OTHERS 1</p>
          {/* second */}
          {Menu2.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${location.pathname === menu.path && " text-orange"}`}
              >
                <span
                  className={`w-5 h-5 text-xl ${
                    location.pathname === menu.path
                      ? "text-orange"
                      : "text-icongray"
                  }`}
                >
                  {menu.src}
                </span>
                <span
                  className={` font-semibold text-base  ${
                    location.pathname === menu.path
                      ? " text-orange"
                      : "text-navColor"
                  } ${!open && "hidden"} origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
          <p className="mt-3 text-xs text-navColor font-medium">OTHERS 2</p>
          {/* third */}
          {Menu3.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${location.pathname === menu.path && " text-orange"}`}
              >
                <span
                  className={`w-5 h-5 text-xl ${
                    location.pathname === menu.path
                      ? "text-orange"
                      : "text-icongray"
                  }`}
                >
                  {menu.src}
                </span>
                <span
                  className={` font-semibold text-base  ${
                    location.pathname === menu.path
                      ? " text-orange"
                      : "text-navColor"
                  } ${!open && "hidden"} origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex justify-between mt-[196px]">
          <div className="flex items-center gap-3">
            <img src={avatar} alt="avatar" className="w-8 h-8" />
            <p className="w-[111px] h-4 font-medium text-[15px] leading-4 text-navColor">
              Blessing Daniels
            </p>
          </div>
          <span className="text-navColor text-xl">...</span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="">
        <Harmburger setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? "flex" : "hidden"
          } absolute z-50 flex-col px-4 py-8 mt-16 space-y-2 font-bold sm:w-auto left-6 right-6 bg-gray-50 drop-shadow shadow-xl rounded-xl w-40`}
        >
          {Menu1.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <li
                className={`flex items-center gap-x-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${location.pathname === menu.path && " text-orange"}`}
              >
                <span
                  className={`w-5 h-5 text-xl ${
                    location.pathname === menu.path
                      ? "text-orange"
                      : "text-icongray"
                  }`}
                >
                  {menu.src}
                </span>
                <span
                  className={` ${
                    location.pathname === menu.path && "text-orange"
                  } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
          <p className="mt-3 text-xs text-navColor font-medium">OTHERS 1</p>
          {Menu2.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <li
                className={`flex items-center gap-x-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${location.pathname === menu.path && " text-orange"}`}
              >
                <span
                  className={`w-5 h-5 text-xl ${
                    location.pathname === menu.path
                      ? "text-orange"
                      : "text-icongray"
                  }`}
                >
                  {menu.src}
                </span>
                <span
                  className={` ${
                    location.pathname === menu.path && "text-orange"
                  } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
          <p className="mt-3 text-xs text-navColor font-medium">OTHERS 3</p>
          {Menu3.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <li
                className={`flex items-center gap-x-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${location.pathname === menu.path && " text-orange"}`}
              >
                <span
                  className={`w-5 h-5 text-xl ${
                    location.pathname === menu.path
                      ? "text-orange"
                      : "text-icongray"
                  }`}
                >
                  {menu.src}
                </span>
                <span
                  className={` ${
                    location.pathname === menu.path && "text-orange"
                  } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideNav;
