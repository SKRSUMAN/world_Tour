import { MdPlace } from "react-icons/md";
import footerData from "../Api/FooterApi.json";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footer = () => {
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

  const footerIcons = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <>
      <div className="w-full h-fit md:!h-[100px] bg-[#151414] flex flex-col justify-center ">
        <div className="lg:!px-[120px] md:!px-[50px] !px-[20px] md:!my-10 !my-5 !margin-auto grid md:grid-cols-3 gap-5 place-items-center ">
          {footerData.map((data, index) => {
            const { icon, title, details } = data;
            return (
              <div key={index} className="flex gap-5 justify-center items-center">
                <p className="text-[25px] text-blue-500">{footerIcons[icon]}</p>
                <div className="">
                  <h1 className="text-[18px] font-bold">{title}</h1>
                  <h2 className="text-[14px] tracking-[2px] !text-white/50">
                    {details}
                  </h2>
                </div>
              </div>
              
            );
          })}
           </div>
        </div>
      <div className="flex w-full h-fit md:!h-[80px] bg-[#202020] items-center">
        <div className="lg:!px-[120px] md:!px-[50px] !px-[20px] !margin-auto grid lg:grid-cols-2 w-full md:!my-10 !my-5 ">
          <div>
            <h1 className="!text-white/50 text-[15px] tracking-[1px]">
              Copyright © 2024, All Right Reserved{" "}
              <span className="border-b-2 text-blue-500">
                <NavLink to="https://chatgpt.com/">Skr Suman</NavLink>
              </span>
            </h1>
          </div>
          <div className=" flex gap-5 justify-end">
            {navData.map((data, index) => {
              const { title, link } = data;
              return (
                <div key={index}>
                  <ul>
                    <li className="border-b-2 text-[15px] inline hover:text-blue-500 hover:border-blue-500 cursor-pointer text-white/50">
                      {title}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
