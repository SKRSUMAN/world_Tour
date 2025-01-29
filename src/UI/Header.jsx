import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Country",
      link: "/country",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "About",
      link: "/about",
    },
  ];

  const [show, setShow] = useState(false);

  const handelButtonToggle = () => {
    return setShow(!show);
  };

  return (
    <div className="h-25 w-full bg-[#202020] shadow-[0_10px_10px_-10px_rgba(255,255,255,0.3)]border border-red-500 flex flex-col items-center justify-center">
      <div className="lg:!px-[120px] md:!px-[50px] !px-[20px] !margin-auto grid grid-cols-2 gap-5 w-full">
        <div className="">
          <NavLink>
            <h1 className="inline text-[32px] font-bold hover:border-b-3 hover:border-blue-400">
              WorldTour
            </h1>
          </NavLink>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-10 justify-end">
            {navData.map((data, index) => {
              const { title, link } = data;
              return (
                <NavLink to={link} key={index}>
                  <li className="text-[20px] inline border-b-2 border-white hover:text-blue-500 hover:border-blue-500">
                    {title}
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>

        <div className=" md:hidden flex justify-end items-center">
          <button
            onClick={handelButtonToggle}
            className="border border-white rounded-full !px-[20px] !py-[2px] hover:bg-gray-700">
            <GiHamburgerMenu className="text-[28px] text-white !p-1" />
          </button>
        </div>
      </div>

      {show && (
        <div className="block md:hidden absolute bg-[#0d1212] w-full min-h-[85px] top-[95px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]  !p-5">
          <ul className="flex flex-col gap-5 justify-center items-center py-5">
            {navData.map((data, index) => {
              const { title, link } = data;
              return (
                <NavLink to={link} key={index}>
                  <li className="text-[20px] inline border-b-2 text-white hover:text-blue-500 hover:border-blue-500">
                    {title}
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
