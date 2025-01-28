import { NavLink, useParams } from "react-router-dom";
import Loader from "./Loader";
import { useEffect, useState, useTransition } from "react";
import { getCountryIndviData } from "../Api/PostAPi";

const CountryDetails = () => {
  const params = useParams();
  // console.log(params)

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  console.log(country);
  console.log("setcounrty", setCountry);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndviData(params.id);
      //  console.log(res)
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, []);

  if (isPending) return <Loader />;
  function printCurrencyData(data) {
    if (data && typeof data === 'object') {
        if (Object.keys(data).length && typeof Object.values(data)[0] === 'object') {
            
            return Object.keys(data).map((key) => data[key].name).join(", ");
        } else {
            
            const { name } = data;
            return name;
        }
    } else {
        console.error("Invalid data: Must be an object");
        return null;
    }
}

  return (
    <div className="w-full min-h-[80vh]">
      <div className="!p-2">
        <div className="border-2 border-transparent from-[#070909] via-[#140d1b] to-[#110d13] rounded-[45px] bg-gradient-to-r from-[rgb(31, 112, 112)] via-[rgb(67, 10, 124)] to-[rgb(155, 23, 221)] bg-clip-border border-y-[#726578] border-x-[#625e63] border border-red-500 bg-amber-100 rounded-[40px] grid grid-cols-2 !my-10 !p-10">
          <div className="flex items-center justify-center !my-10">
            <img
              className="w-full/2 h-[160px] object-fill"
              src={country?.flags?.svg}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <h1 className="text-[28px] font-semibold">{country?.name?.official}</h1>
            <p className="text-white/50 text-[17px] font-semibold">
              Native Names: <span className="text-white font-normal">{country?.name?.common}</span>
            </p>
            <p className="text-white/50 text-[17px] font-semibold">
              Population: <span className="text-white font-normal">{country?.population}</span>
            </p>
            <p className="text-white/50 text-[17px] font-semibold">
              Region: <span className="text-white font-normal">{country?.region}</span>
            </p>
            <p className="text-white/50 text-[17px] font-semibold">
              Sub Region: <span className="text-white font-normal">{country?.subregion}</span>
            </p>
            <p className="text-white/50 text-[17px] font-semibold">
              Capital: <span className="text-white font-normal">{country?.capital?.[0]}</span>
            </p>
            <p className="text-white/50 text-[17px] font-semibold">
              Top Level Domain: <span className="text-white font-normal">{country?.tld?.[0]}</span>
            </p>
            <p className="text-white/50 text-[17px] font-semibold">
              Currencies: <span className="text-white font-normal">{ printCurrencyData(country?.currencies)}</span>
            </p>
            <p className="text-white/50 text-[17px] font-semibold">
              Languages:{" "}
              <span className="text-white font-normal">{Object.values(country?.languages || {}).join(", ")}</span>
            </p>
            <div className="flex justify-end">
          <NavLink to="/country">
        <button className="rounded-[17font-medium leading-tight cursor-pointer !py-2.5 !px-6 text-center outline-none text-normal bg-[#202020] text-white rounded-[15px] border-[0.1rem] border-solid hover:bg-gray-700 hover:text-blue-100 !hover:transition-all !hover:duration-300 hover:ease-in-outpx] ">Go Back</button>
    </NavLink>
          </div>
          </div>
          
        </div>
        
      </div>
   
    </div>
  );
};

export default CountryDetails;
