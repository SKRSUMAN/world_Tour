import { NavLink } from "react-router-dom";

const CountryCard = ({ data }) => {
  return (
    <div className="h-fit !p-10 flex flex-col gap-3 border-2 border-transparent from-[#070909] via-[#140d1b] to-[#110d13] rounded-[45px] bg-gradient-to-r from-[rgb(31, 112, 112)] via-[rgb(67, 10, 124)] to-[rgb(155, 23, 221)] bg-clip-border border-y-[#726578] border-x-[#625e63]">
      <div>
        <img
          className="w-full h-[150px] object-fill"
          src={data.flags.svg}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-[32px] font-bold">
          {data.name.common && data.name.common.length > 10
            ? data.name.common.slice(0, 10) + "..."
            : data.name.common && data.name.common.length > 0
            ? data.name.common
            : "N/A"}
        </h1>
      </div>
      <div>
        <p className="text-[18px] font-semibold text-white/50">
          Population:{" "}
          <span className="text-[19px] text-white font-normal">
            {data.population.toLocaleString()}
          </span>
        </p>
        <p className="tracking-[1px] text-[18px] font-semibold text-white/50 ">
          Region:{" "}
          <span className="tracking-[1px] text-[19px] text-white font-normal ">
            {data.region}
          </span>
        </p>
        <p className="tracking-[1px] text-[18px] font-semibold text-white/50">
          Capital:{" "}
          <span className="text-[19px] text-white font-normal">
            {data.capital &&
            data.capital.length > 0 &&
            data.capital[0].length > 10
              ? data.capital[0].slice(0, 10) + "..."
              : data.capital && data.capital.length > 0
              ? data.capital[0]
              : "N/A"}
          </span>
        </p>
      </div>
      <div>
        <NavLink to={`/country/${data.name.common}`}>
        <button className="rounded-[17font-medium leading-tight cursor-pointer !py-2.5 !px-6 text-center outline-none text-normal bg-[#202020] text-white rounded-[15px] border-[0.1rem] border-solid hover:bg-gray-700 hover:text-blue-100 !hover:transition-all !hover:duration-300 hover:ease-in-outpx] ">
          Read More
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CountryCard;
