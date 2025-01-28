import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../../Api/PostAPi";
import Loader from "../../components/Loader";
import CountryCard from "../../components/CountryCard";

const Block = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  console.log(countries)

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      //  console.log(res)
      setCountries(res.data);

    });
  }, []);

  if (isPending) return <Loader />;
  return (
    <div className="w-full flex flex-col items-center justify-center !my-10">
      <div className="lg:!px-[120px] md:!px-[50px] !px-[20px] !margin-auto">
        <ul className="grid grid-cols-4 gap-5">
          {countries.map((CountryData, index) => {
            return <CountryCard key={index} data={CountryData} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Block;
