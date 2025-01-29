import { useEffect, useState } from "react";

const SearchFilter = ({
  countries,
  setCountries,
  setFilterCountry,
  filterCountry,
}) => {
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  console.log("filter", filter);
  console.log("search", search);

  const handelInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handelSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  useEffect(() => {
    const filterCountries = countries.filter((country) => {
      return (
        (!search ||
          country.name.common.toLowerCase().includes(search.toLowerCase())) &&
        (filter === "all" || country.region === filter)
      );
    });

    setFilterCountry(filterCountries);
  }, [search, filter]);

  //   console.log(filterCountry[0], "filterContry");

  const handleFilter = (key) => {
    // console.log(key);

    let sortedData = [...filterCountry];

    // if (key === "asc") {
    //   sortedData.sort((a, b) => a.name.common.localeCompare(b.name.common));
    // } else if (key === "desc") {
    //   sortedData.sort((a, b) => b.name.common.localeCompare(a.name.common));
    // }

    // {
    //     key==="asc"?sortedData.sort((a, b) => a.name.common.localeCompare(b.name.common)):sortedData.sort((a, b) => b.name.common.localeCompare(a.name.common));
    // }

    sortedData.sort((a, b) =>
      key === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    );

    // console.log(sortedData);
    setFilterCountry(sortedData);
  };

  return (
    <div className="w-full !my-15 ">
      <div className="lg:!px-[150px] md:!px-[80px] !px-[10px] !margin-auto  ">
        <div className="grid lg:grid-cols-4 place-items-center gap-5">
          <div className="sm:!w-[95%] w-full">
            <input
              className="text-white border !py-2 !px-5 rounded-md bg-white/10 sm:w-[95%] w-full"
              type="text"
              placeholder="Search"
              name="search"
              value={search}
              onChange={handelInputChange}
            />
          </div>
          <div>
            <button
              onClick={() => handleFilter("asc")}
              className="hidden lg:block border rounded-[10px] !px-5 !py-2 cursor-pointer bg-white/15">
              ASC
            </button>
          </div>
          <div
            onClick={() => handleFilter("desc")}
            className="hidden lg:block border rounded-[10px] !px-5 !py-2 cursor-pointer bg-white/15">
            DESC
          </div>
          <div className="sm:!w-[95%] w-full">
            <select
              className="!px-5 !py-2 border md:rounded-[20px] rounded-md cursor-pointer bg-white/15 sm:!w-[95%] w-full "
              value={filter}
              onChange={handelSelectChange}>
              <option className="text-[18px] bg-black" value="all">
                All
              </option>
              <option className="text-[18px] bg-black" value="Africa">
                Africa
              </option>
              <option className="text-[18px] bg-black" value="Americas">
                Americas
              </option>
              <option className="text-[18px] bg-black" value="Asia">
                Asia
              </option>
              <option className="text-[18px] bg-black" value="Europe">
                Europe
              </option>
              <option className="text-[18px] bg-black" value="Oceania">
                Oceania
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
