import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";
import { UseUserContext } from "../Context/Authuser";
import { useAuth } from "../Context/useAuth";

export function AppBar({ title }: { title: string }) {
  const { userdetails, detailsloading } = UseUserContext();
  const {logout}=useAuth();

  const navigate = useNavigate();

  const handlelogout=()=>{
    logout();
  }
  return (
    <>
      <div className=" flex  justify-between items-center h-20 shadow-md font-sans  z-10  bg-[#1d2226] rounded-none bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border-b border-black ">
        <Link to={"/blog"}>
          {" "}
          <div className="flex justify-between items-center pl-10 md:pl-14 gap-3 cursor-pointer">
            <img
              className="md:w-16 w-12 dark:invert h-7 md:h-10"
              src="/medium-logo-F0ACFCCD58-seeklogo.com.png"
            />
            <div className="text-xl text-black dark:text-white font-semibold hidden md:block">
              OpenUp
            </div>
          </div>
        </Link>
        <div className="flex justify-between items-center mr-4 md:mr-12 gap-2 md:gap-5">
          {title === "Write" ? (
            <div
              onClick={() => {
                navigate("/blog/Create");
              }}
              className="flex justify-center items-center cursor-pointer gap-2 font-normal text-black text-md dark:text-white md:font-normal"
            >
              <TfiWrite className="text-black dark:text-white shadow-lg w-5 h-5" />
              <p className="text-black dark:text-white  hidden md:block">
                {title}
              </p>
            </div>
          ) : (
            <div></div>
          )}

          <div>
            <IoIosNotificationsOutline className="md:w-8 md:h-6 w-6 h-4 dark:text-white text-black " />
          </div>

          <div className="dropdown dropdown-hover dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle  ">
              {detailsloading ? (
                <div className="flex justify-center  items-center">
                  <div
                    className="animate-spin inline-block w-5 h-5  border-[3px] border-current border-t-transparent text-white rounded-full "
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="text-white text-center text-lg ">
                  {userdetails?.FirstName[0]}
                </div>
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-44   bg-black/70 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 "
            >
              <li>
               <Link to={`/${userdetails?.FirstName}`}> <div className="text-black dark:text-white   hover:bg-opacity-30">
                  Profile
                </div></Link>
              </li>
              <li>
                <div
                  onClick={() =>{
                    const modal = document.getElementById("my_modal_1") as HTMLDialogElement
                    if (modal){
                      modal.showModal()
                    }
                  }
                  }
                  className="text-black dark:text-white hover:bg-opacity-30"
                >
                  Logout
                </div>

                <dialog
                  id="my_modal_1"
                  className="modal w-full flex justify-center items-center  bg-black/20 rounded-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
                >
                  <div className="modal-box w-3/4 sm:w-1/3 text-center bg-black/40   bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 ">
                    <h3 className="font-bold  text-gray-200 text-md md:text-2xl">
                      Are you sure you want to Logout?
                    </h3>
                    <br></br>
                    <br></br>
                    <div className="modal-action">
                      <form method="dialog" className="w-full">
                        <button
                          className="btn bg-gray-300 w-5/12 text-gray-900 mr-2 hover:rounded-none hover:text-gray-200  border-none rounded-full outline-none"
                          onClick={handlelogout}
                        >
                          Yes
                        </button>
                        <button className="btn w-5/12 ml-2 bg-gray-900 text-gray-100 hover:rounded-none border-none rounded-full outline-none">
                          No
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}