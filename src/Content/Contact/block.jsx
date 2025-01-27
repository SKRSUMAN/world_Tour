const Block = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5 w-[80%] !my-15">
        <div>
          <h1 className="text-[38px] font-bold !mb-5">Contact Us</h1>
        </div>
        <form className="flex flex-col gap-5 xl:w-[50%] w-full" action="" >
          <input
            className="border border-white/50 !px-5 !py-2 rounded-md text-[20px] "
            type="text"
            placeholder="Enter Your Name"
            name="username"
            autoComplete="off"
            required

          />
          <input
            className="border border-white/50 !px-5 !py-2 rounded-md text-[20px]"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            autoComplete="off"
            required
          />
          <textarea className="border border-white/50 !px-5 !py-2 rounded-md text-[20px]"
            name="message"
            placeholder="Enter Your Message"
            rows="10"
            autoComplete="off"
            required></textarea>

            <div>
                <button type="submit" value="send" className="w-full items-center font-medium leading-tight cursor-pointer !py-2.5 !px-6 text-center outline-none border-0 text-normal bg-[#202020] text-white rounded-[15px] border-[0.1rem] border-solid hover:bg-gray-700 hover:text-blue-100 !hover:transition-all !hover:duration-300 hover:ease-in-out text-[18px] font-semibold">Send</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Block;
