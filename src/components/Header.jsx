import React from "react";

import { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

function Header() {
  const [nav, setNav] = useState(false);
  const [isLogin] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="border-t-2 shadow-lg py-2 md:py-4">
      <div className="flex justify-between mx-3 md:mx-4 lg:mx-5 items-center lg:max-w-screen-xl 2xl:mx-auto">
        {/* website icon */}
        <h1 className="font-montserrat text-[#56BBF1] text-lg lg:text-3xl">
          <span className="italic">STOR</span>
          <span className="font-extralight">Y</span>
          <span className="italic">SiX</span>
          <span className="font-extrabold">3</span>
        </h1>

        {/* dropdown */}
        {nav ? (
          <div className="relative">
            <IoCloseSharp onClick={handleNav} />
            {/* card */}
            {isLogin ? (
              //   if login
              //   card drop down
              <div className="shadow-sm rounded-xl bg-white shadow-black/40 p-2 absolute right-0 top-6 md:top-7">
                <ul className="font-poppins">
                  <li className="flex flex-col">
                    {/* button to profiles detail */}
                    <button className="shadow-sm shadow-black/40 py-2 px-36 rounded-xl text-sm text-white bg-[#56BBF1] md:py-1 md:px-20 lg:px-16">
                      Profiles
                    </button>
                    {/* button logout */}
                    {/* py-1 px-10 */}
                    <button className="mt-1 py-2 md:py-1 rounded-xl text-sm text-[#FF0303] shadow-sm shadow-black/40">
                      Log Out
                    </button>
                  </li>
                  {/* dark mode */}
                  <li>
                    <div className="flex items-center justify-between pt-2 ">
                      <p className="font-bold text-2xl lg:text-lg">Dark</p>
                      <div className="bg-[#0C1068] w-12 h-6 rounded-xl">
                        <div className="bg-white w-5 h-5 rounded-xl mt-[2px] ml-1"></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              //   if notLogin
              //   card drop down
              <div className="shadow-sm rounded-xl bg-white shadow-black/40 p-2 absolute right-0 top-6 md:top-7">
                <ul className="font-poppins">
                  {/* button login */}
                  <button className="py-2 px-[9.3rem] rounded-xl text-sm text-white bg-[#56BBF1] md:py-1 md:px-20 lg:px-16">
                    Login
                  </button>
                  {/* dark mode button */}
                  <div className="flex items-center justify-between pt-2 ">
                    <li className="font-bold text-2xl lg:text-lg">Dark</li>
                    <div className="bg-[#0C1068] w-12 h-6 rounded-xl">
                      <div className="bg-white w-5 h-5 rounded-xl mt-[2px] ml-1"></div>
                    </div>
                  </div>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <IoMenu onClick={handleNav} />
        )}
      </div>
    </div>
  );
}

export default Header;
