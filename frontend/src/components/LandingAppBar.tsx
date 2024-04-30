import { Link, useNavigate } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { IoMdInformationCircleOutline } from "react-icons/io";


export const LandingAppBar = ({id}:{id:string }) => {
    const navigate = useNavigate();
    const scrollToSection = (id:string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
  return (
    <div className="w-full overflow-y-auto">
      <div className=" z-10 w-full fixed  h-20 flex items-center justify-between  bg-[#1d2226] rounded-none bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border-b border-gray-700 ">
        <div className="flex justify-between ml-6 md:ml-12 items-center gap-3">
          <img
            className="md:w-16 w-10 dark:invert h-6 md:h-10"
            src="/medium-logo-F0ACFCCD58-seeklogo.com.png"
          />
          <div className="text-xl text-black dark:text-gray-300 font-semibold hidden md:block">
            OpenUp
          </div>
         
        </div>
        <div className="flex justify-between gap-4 sm:gap-7 md:gap-8 dark:text-gray-300">
          <Link to={'/blog/explore'}><div className="flex gap-2 items-center"><MdOutlineExplore className="w-6 h-6 md:w-5 md:h-5 text-gray-300" /> <p  className="hidden md:block"> Explore</p></div></Link>
          <Link to={localStorage.getItem('token')?'/Blog/Create':'/signin'}><div className="flex gap-2 items-center"><TfiWrite className="w-5 h-5 md:w-4 md:h-4 text-gray-300" /><p  className="hidden md:block"> Write</p></div></Link>
          <Link to={`/`} onClick={()=>{scrollToSection(id)}}><div className="flex gap-2 items-center "><IoMdInformationCircleOutline className="w-6 h-6 md:w-5 md:h-5 text-gray-300" /> <p className="hidden md:block">About us</p></div></Link>
        </div>           

        <div className="flex justify-between pr-4 md:mr-12 gap-4 md:gap-7 dark:text-gray-300">
          <button onClick={()=>{
                  navigate("/signup")
          }} className="btn rounded-xl md:rounded-3xl text-xs md:text-md md:px-5 px-2">Signup</button>
          <button onClick={()=>{
                  navigate("/signin")
          }} className="btn rounded-xl md:rounded-3xl text-xs md:text-md md:px-5 px-2">Signin</button>
        </div>
      </div>
    </div>
  );
};
