import countryFacts from "../../Api/CountryData.json";

const Block = () => {
  return (
    <div className="w-full flex items-center justify-center !my-10">
      <div className="lg:!px-[120px] md:!px-[50px] !px-[20px] !margin-auto flex flex-col justify-center items-center">
        <div className="lg:w-[50%] md:w-[60%] w-full flex items:center justify-center">
          <h1 className="md:text-[42px] text-[40px] font-bold text-center !mb-5">
            Here are the Interesting Facts we’re proud of
          </h1>
        </div>
        <div className="w-full grid lg:grid-cols-3 gap-5 !mt-5 place-items-center">
          {countryFacts.map((data) => {
            const { id, countryName, capital, population, interestingFact } =
              data;

            return (
              <div
                key={id}
                className="lg:w-[400px] md:w-[600px] w-full min-h-[250px] rounded-[20px] relative border-2 border-transparent bg-gradient-to-r from-[#070909] via-[#1a181c] to-[#080609] bg-clip-padding rounded-[45px] !p-10 flex flex-col gap-1.5 border-[3px] border-transparent bg-gradient-to-r from-[rgb(31, 112, 112)] via-[rgb(67, 10, 124)] to-[rgb(155, 23, 221)] bg-clip-border">
                <h1 className="text-[30px] font-bold text-white/50 !mb-3">
                  {countryName}
                </h1>
                <p className="text-[18px] font-semibold text-white/50">
                  Capital:
                  <span className="text-white text-[17px] font-normal">
                    {capital}
                  </span>
                </p>
                <p className="text-[18px] font-semibold text-white/50">
                  Population:
                  <span className="text-white text-[17px] font-normal">
                    {population}
                  </span>
                </p>
                <p className="text-[18px] font-semibold text-white/50">
                  Interesting Fact:
                  <span className="text-white text-[17px] font-normal">
                    {interestingFact}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Block;
