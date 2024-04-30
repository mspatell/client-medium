import { Foooter } from "./footer";
import { LandingAppBar } from "./landingAppBar";
import { MdOutlineStart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const WelcomePage = () => {
  const navigate=useNavigate();

  const handleclickevent=()=>{
    if (localStorage.getItem('token'))
       navigate('/blog')
      else{
        navigate('/signup')
      }
    }
 
  return (
    <>
      <div className="w-full h-screen  flex flex-col">
        <div>
        <LandingAppBar id={"section1"}></LandingAppBar>
        </div>
        <div className=" flex-grow bg-[url(/image.jpeg)] bg-cover bg-center bg-no-repeat ">
          <div className="flex items-center h-full w-full bg-gradient-to-l from-black/10 via-black/80 to-black justify-center md:justify-normal pl-10 md:pl-40">
            <div className="flex flex-col gap-4  text-white">
              <h1 className="text-8xl font-semibold bg-gradient-to-r from-white  to-slate-800 inline-block text-transparent bg-clip-text ">
                SHARE
              </h1>
              <div className="text-5xl font-light bg-gradient-to-r from-red-300 via-orange-400  to-white inline-block text-transparent bg-clip-text">
                WHAT YOU THINK
              </div>
              <span className="text-md font-thin mt-2 opacity-80">
                Don't Keep your opinion to yourself.
              </span>
              <div className="-mt-4 ">
                <span className="text-md font-thin  opacity-80">
                  It's time to{"  "}
                </span>
                <span className="opacity-90 text-lg underline-offset-0">
                    OpenUp.
                </span>
                <div className="mt-8"><button onClick={handleclickevent} className="flex items-center gap-2 px-3 py-2 bg-black/90 shadow-xl hover:bg-gray-950 bg-opacity-80 rounded-lg  "><p className="text-md font-semibold bg-gradient-to-r from-white  to-slate-500 text-transparent bg-clip-text">Get Started </p><MdOutlineStart className="w-6 h-4 opacity-70"/></button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="section1">
      <div className="h-screen w-full bg-black flex flex-col gap-2 ">
        <div className="flex items-center justify-center gap-4 flex-grow">
          <img
            src="/medium-logo-F0ACFCCD58-seeklogo.com.png"
            className="w-24 h-16 invert"
          ></img>
          <div className="text-5xl  bg-gradient-to-r from-white  to-slate-800 text-transparent bg-clip-text font-bold p-2">
            Open Up
          </div>
        </div>
      <Foooter></Foooter>
      </div>
      </section>

    </>
  );
};


