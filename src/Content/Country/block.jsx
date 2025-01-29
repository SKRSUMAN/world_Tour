import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../../Api/PostAPi";
import Loader from "../../components/Loader";
import CountryCard from "../../components/CountryCard";

const Block = ({
  countries,
  setCountries,
  setFilterCountry,
  filterCountry,
}) => {
  const [isPending, startTransition] = useTransition();

  // console.log(countries);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      //  console.log(res)
      setCountries(res.data);
      setFilterCountry(res.data);
    });
  }, []);

  if (isPending) return <Loader />;
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center !my-10">
        <div className="xl:!px-[120px] md:!px-[50px] !px-[20px] !margin-auto">
          <ul className="grid xl:grid-cols-4 md:grid-cols-2 gap-10">
            {filterCountry.length > 0 &&
              filterCountry.map((CountryData, index) => {
                return <CountryCard key={index} data={CountryData} />;
              })}
          </ul>
          { filterCountry.length === 0 && 
            <p className="text-[40px] font-bold text-[#ff0000af] ">
             Ops! No data Found
            </p>
          }
        </div>
      </div>
    </>
  );
};

export default Block;
