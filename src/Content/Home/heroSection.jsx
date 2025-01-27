import { FaLongArrowAltRight } from "react-icons/fa"

const HeroSection = () => {
  return (
    <div className='w-full min-h-[470px] !mt-[100px]'>
        <div className="lg:!px-[120px] md:!px-[50px] !px-[20px] !margin-auto grid md:grid-cols-2">
            <div className="flex flex-col gap-10">
                <div>
                    <h1 className="font-bold text-[clamp(3.2rem,_5vw,_3.221rem)] leading-[1.15] tracking-[-1px]">Explore the World, One Country at a Time.</h1>
                </div>
                <div>
                <h2 className="text-[20px]">Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.</h2>
                </div>
                <div className="gap-5">
                <button className="flex gap-5 items-center font-medium leading-tight cursor-pointer !py-2.5 !px-6 text-center outline-none border-0 text-normal bg-[#202020] text-white rounded-[15px] border-[0.1rem] border-solid hover:bg-gray-700 hover:text-blue-100 !hover:transition-all !hover:duration-300 hover:ease-in-out">Start Exploring  <FaLongArrowAltRight className="text-[22px]" /> </button>
                </div>
            </div>
              
            <div className="w-full flex items-center justify-center !mt-10">
                <div>
                    <img src="/images/world.png" alt="" />
                </div>
            </div>

        </div>



    </div>
  )
}

export default HeroSection