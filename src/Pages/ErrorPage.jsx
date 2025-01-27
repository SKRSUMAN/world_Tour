import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("Error", error);

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center ">
      <style>
        {`
      @keyframes shake {
        0%, 100% {
          transform: translateX(0) scale(1);
        }
        25% {
          transform: translateX(-10px) scale(1.05);
        }
        50% {
          transform: translateX(10px) scale(1.05);
        }
        75% {
          transform: translateX(-10px) scale(1.05);
        }
      }
      
      @keyframes colorPulse {
        0%, 100% {
          color: #dc2626; /* Red-600 */
        }
        50% {
          color:rgb(190, 131, 131); /* Red-500 */
        }
      }
    `}
      </style>
      <h1
        className="text-[58px] font-bold text-red-600"
        style={{
          animation: "shake 0.5s ease-in-out infinite, colorPulse 1s ease-in-out infinite",
        }}>
        Ops! An error occured.
        {error && <p className="text-[22px] text-center font-semibold">{error.data}</p>}
      </h1>
      <NavLink to="/"> 
      <button className="cursor-pointer bg-red-500 hover:bg-yellow-600 text-white font-semibold !py-2 !px-6 rounded-full shadow-lg !mt-10 transition-all duration-300 transform hover:scale-105 border border-black-500">
  GO Home
</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
