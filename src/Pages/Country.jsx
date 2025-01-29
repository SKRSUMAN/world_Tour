import { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import Block from "../Content/Country/block";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const[filterCountry,setFilterCountry] = useState([])

  return (
    <div className="">
      <SearchFilter countries={countries} setCountries={setCountries} setFilterCountry={setFilterCountry} filterCountry={filterCountry}/>
      <Block countries={countries} setCountries={setCountries} setFilterCountry={setFilterCountry} filterCountry={filterCountry} />
    </div>
  );
};

export default Country;
